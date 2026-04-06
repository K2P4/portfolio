drop function if exists match_knowledge(vector(3072), float, int);
drop function if exists match_knowledge(vector(2048), float, int);

alter table public.knowledge_base 
alter column embedding type vector(2048);

create or replace function match_knowledge (
  query_embedding vector(2048),
  match_threshold float,
  match_count int
)
returns table (
  id uuid,
  content text,
  similarity float
)
language sql
stable
as $$
  select
    id,
    content,
    1 - (embedding <=> query_embedding) as similarity
  from public.knowledge_base
  where 1 - (embedding <=> query_embedding) > match_threshold
  order by embedding <=> query_embedding
  limit match_count;
$$;
