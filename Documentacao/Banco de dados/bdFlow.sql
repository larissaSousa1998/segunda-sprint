create database bdFlow;
use bdFlow;

create table tbLinha (
codLinha int primary key auto_increment,
descricaoLinha varchar(50),
extensaoLinha varchar(10),
zonaLinha varchar(20));

create table tbUsuario(
codUsuario int primary key auto_increment,
nomeUsuario varchar(40),
emailUsuario varchar(30),
senhaUsuario varchar(20),
loginUsuario varchar(20));

create table tbUsuarioLinha(
fkLinha int, foreign key  (fkLinha) references tbLinha(codLinha),
fkUsuario int, foreign key (fkUsuario) references tbUsuario(codUsuario));

create table tbEstacao(
codEstacao int primary key auto_increment,
nomeEstacao varchar(40),
descricaoEstação varchar(80),
extensaoEstacao varchar(10));

create table tbEstacaoLinha(
fkLinhaE int, foreign key (fkLinhaE) references tbLinha(codLinha),
fkEstacao int, foreign key (fkEstacao) references tbEstacao(codEstacao));

create table tbLocal(
codLocal int primary key auto_increment,
areaCaptacaoLocal int,
descricaoLocal varchar(80),
fkEstacaoL int, foreign key (fkEstacaoL) references tbEstacao(codEstacao));

create table tbSensor(
codSensor int primary key auto_increment,
modeloSensor varchar(20),
fkLocal int, foreign key (fkLocal) references tbLocal(codLocal));

create table tbDadoSensor(
codSensor int primary key auto_increment,
valorSensor int,
dataEntradaDado datetime,
fkSensor int, foreign key (fkSensor) references tbSensor(codSensor));