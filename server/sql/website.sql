\echo 'Delete and recreate website db'
\prompt 'Return for yes or control-C to cancel >' foo

DROP DATABASE website;
CREATE DATABASE website;
\connect website

\i website-schema.sql
\i website-see.sql

\echo 'Delete and recreate website_test db'
\prompt 'Return for yes or control-C to cancel >' foo

DROP DATABASE website_test;
CREATE DATABASE website_test;
\connect website_test

\i website-schema.sql