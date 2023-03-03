CREATE SCHEMA IF NOT EXISTS groupironman;

CREATE TABLE IF NOT EXISTS groupironman.groups(
       group_id BIGSERIAL UNIQUE,
       group_name TEXT NOT NULL,
       group_token_hash CHAR(64) NOT NULL,
       PRIMARY KEY (group_name, group_token_hash)
);
INSERT INTO groupironman.groups (group_name, group_token_hash) values ('kanoWorld1', 'da5a9389e3421c9c46edae36585a1585c039f5a8aa714a44d19a71a6cad1af50') on conflict do nothing;
