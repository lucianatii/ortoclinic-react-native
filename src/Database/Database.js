import SQLite from "react-native-sqlite-storage";
SQLite.DEBUG(true);
SQLite.enablePromise(true);

const database_name = "Ortoclinic.db"; //Nome do banco de dados
const database_version = "1.0"; //Versão do banco de dados
const database_displayname = "Ortoclinic"; //Nome de exibição do banco de dados
const database_size = 200000; //tamanho máximo do banco de dados

export default class ItemDatabase {

    Conectar() {   //**** CRUD => CREATE - aqui o BD é aberto e a tabela é criada se não existir *****/
        let db;
        return new Promise((resolve) => {
            console.log("Checando a integridade do plugin ...");
            SQLite.echoTest().then(() => {
                console.log("Integridade Ok ...");
                console.log("Abrindo Banco de Dados ...");
                SQLite.openDatabase(database_name, database_version, database_displayname, database_size).then(DB => {
                    db = DB;
                    console.log("Banco de dados Aberto");
                    // verifica se existe alguma tabela
                    db.executeSql('SELECT 1 FROM Paciente LIMIT 1').then(() => {
                        console.log("O banco de dados está pronto ... Executando Consulta SQL ...");
                    }).catch((error) => {
                        console.log("Erro Recebido: ", error);
                        console.log("O Banco de dados não está pronto... Criando tabela");
                        db.transaction((tx) => {
                            // aqui a tabela é criada, se ainda não existir
                            tx.executeSql('CREATE TABLE IF NOT EXISTS Paciente (id INTEGER PRIMARY KEY AUTOINCREMENT, nome varchar (50), endereco varchar(50), procedimento varchar(18), tipo varchar(4), data carchar(10), imagem TEXT)');
                        }).then(() => {
                            console.log("Tabela criada com Sucesso");
                        }).catch(error => {
                            console.log(error);
                        });
                    });
                    resolve(db);
                }).catch(error => {
                    console.log(error);
                });
            }).catch(error => {
                console.log("echoTest Falhou - plugin não funcional");
            });
        });
    };

    Desconectar(db) {
        if (db) {
            console.log("Fechando Banco de Dados");
            db.close().then(status => {
                console.log("Banco de dados Desconectado!!");
            }).catch(error => {
                console.log(error);
            });
        } else {
            console.log("A conexão com o banco não está aberta");
        }
    };

    Listar() {   //**** CRUD => READ - aqui a tabela é lida *****/
        return new Promise((resolve) => {
            const lista = [];
            this.Conectar().then((db) => {
                db.transaction((tx) => {
                    //Query SQL para listar os dados da tabela   
                    tx.executeSql('SELECT * FROM Paciente', []).then(([tx, results]) => {
                        console.log("Consulta completa");
                        var len = results.rows.length;
                        for (let i = 0; i < len; i++) {
                            let row = results.rows.item(i);
                            const { id, nome, endereco, procedimento, tipo, data, imagem } = row;
                            lista.push({ id, nome, endereco, procedimento, tipo, data, imagem });
                        }
                        console.log(lista);
                        resolve(lista);
                    });
                }).then((result) => {
                    this.Desconectar(db);
                }).catch((err) => {
                    console.log(err);
                });
            }).catch((err) => {
                console.log(err);
            });
        });
    }


    Inserir(paciente) { 
        return new Promise((resolve) => {
            this.Conectar().then((db) => {
                db.transaction((tx) => {
                    //Query SQL para inserir um novo registro 
                    tx.executeSql('INSERT INTO Paciente (nome, endereco, procedimento, tipo, data, imagem) VALUES (?, ?, ?, ?, ?, ?)', [paciente.nome, paciente.endereco, paciente.procedimento, paciente.tipo, paciente.data, paciente.imagem]).then(([tx, results]) => {
                        resolve(results);
                    });
                }).then((result) => {
                    this.Desconectar(db);
                }).catch((err) => {
                    console.log(err);
                });
            }).catch((err) => {
                console.log(err);
            });
        });
    }


    Remover(id) {   //**** CRUD => DELETE - aqui um registro da tabela é removido *****/
        return new Promise((resolve) => {
            this.Conectar().then((db) => {
                db.transaction((tx) => {
                    //Query SQL para deletar um item da base de dados    
                    tx.executeSql('DELETE FROM Paciente WHERE Id = ?', [id]).then(([tx, results]) => {
                        console.log(results);
                        resolve(results);
                    });
                }).then((result) => {
                    this.Desconectar(db);
                }).catch((err) => {
                    console.log(err);
                });
            }).catch((err) => {
                console.log(err);
            });
        });
    }

}
