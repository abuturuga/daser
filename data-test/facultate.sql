CREATE TABLE studenti(
  nr_matricol CHAR(4) NOT NULL,
  nume VARCHAR2(10),
  prenume VARCHAR2(10),
  an NUMBER(1),
  grupa CHAR(2),
  bursa NUMBER(6,2),
  data_nastere DATE
)

CREATE TABLE cursuri(
  id_curs CHAR(2) NOT NULL,
  titlu_curs VARCHAR2(15),
  an NUMBER(1),
  semestru NUMBER(1),
  credite NUMBER(2)
)


CREATE TABLE note(
  nr_matricol CHAR(4),
  id_curs CHAR(2),
  valoare NUMBER(2),
  data_notare DATE
)


CREATE TABLE profesori(
  id_prof CHAR(4),
  nume CHAR(10),
  prenume CHAR(10),
  grad_didactic VARCHAR2(5)
)

CREATE TABLE didactic(
  id_prof CHAR(4),
  id_curs CHAR(4)
)









