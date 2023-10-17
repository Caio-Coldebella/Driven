--
-- PostgreSQL database dump
--

-- Dumped from database version 12.12 (Ubuntu 12.12-0ubuntu0.20.04.1)
-- Dumped by pg_dump version 12.12 (Ubuntu 12.12-0ubuntu0.20.04.1)

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

--
-- Name: statustype; Type: TYPE; Schema: public; Owner: -
--

CREATE TYPE public.statustype AS ENUM (
    'Não Assistido',
    'Assistindo',
    'Assistido'
);


SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: genre; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.genre (
    id integer NOT NULL,
    name character varying(50) NOT NULL
);


--
-- Name: genre_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.genre_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: genre_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.genre_id_seq OWNED BY public.genre.id;


--
-- Name: movie; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.movie (
    id integer NOT NULL,
    name text NOT NULL,
    "platformId" integer NOT NULL,
    "genreId" integer NOT NULL,
    status public.statustype DEFAULT 'Não Assistido'::public.statustype NOT NULL,
    review text,
    grade integer
);


--
-- Name: movie_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.movie_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: movie_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.movie_id_seq OWNED BY public.movie.id;


--
-- Name: platform; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.platform (
    id integer NOT NULL,
    name character varying(50)
);


--
-- Name: platform_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.platform_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: platform_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.platform_id_seq OWNED BY public.platform.id;


--
-- Name: genre id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.genre ALTER COLUMN id SET DEFAULT nextval('public.genre_id_seq'::regclass);


--
-- Name: movie id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.movie ALTER COLUMN id SET DEFAULT nextval('public.movie_id_seq'::regclass);


--
-- Name: platform id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.platform ALTER COLUMN id SET DEFAULT nextval('public.platform_id_seq'::regclass);


--
-- Data for Name: genre; Type: TABLE DATA; Schema: public; Owner: -
--

INSERT INTO public.genre VALUES (4, 'Comédia');
INSERT INTO public.genre VALUES (5, 'Drama');
INSERT INTO public.genre VALUES (6, 'Terror');


--
-- Data for Name: movie; Type: TABLE DATA; Schema: public; Owner: -
--

INSERT INTO public.movie VALUES (1, 'Se beber não case', 4, 4, 'Assistido', NULL, 10);


--
-- Data for Name: platform; Type: TABLE DATA; Schema: public; Owner: -
--

INSERT INTO public.platform VALUES (4, 'Prime Video');
INSERT INTO public.platform VALUES (5, 'Netflix');
INSERT INTO public.platform VALUES (6, 'Disney+');


--
-- Name: genre_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.genre_id_seq', 6, true);


--
-- Name: movie_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.movie_id_seq', 2, true);


--
-- Name: platform_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.platform_id_seq', 6, true);


--
-- Name: genre genre_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.genre
    ADD CONSTRAINT genre_pkey PRIMARY KEY (id);


--
-- Name: movie movie_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.movie
    ADD CONSTRAINT movie_pkey PRIMARY KEY (id);


--
-- Name: platform platform_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.platform
    ADD CONSTRAINT platform_pkey PRIMARY KEY (id);


--
-- Name: movie movie_genreId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.movie
    ADD CONSTRAINT "movie_genreId_fkey" FOREIGN KEY ("genreId") REFERENCES public.genre(id);


--
-- Name: movie movie_platformId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.movie
    ADD CONSTRAINT "movie_platformId_fkey" FOREIGN KEY ("platformId") REFERENCES public.platform(id);


--
-- PostgreSQL database dump complete
--

