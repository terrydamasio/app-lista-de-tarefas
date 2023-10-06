<?php

    class Conexao {
        private $host = 'localhost';
        private $dbname = 'app_lista_de_tarefas';
        private $user = 'root';
        private $pass = 'root';

        public function conectar() {
            try {
                $conexao = new PDO("mysql:host=$this->host;dbname=$this->dbname", 
                $this->user, 
                $this->pass);

                return $conexao;

            } catch(PDOException $e) {
                echo $e->getCode() . ' - ' . $e->getMessage();
            }
        }   
    }