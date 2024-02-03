/*
    Higuera Sanchez Dulce Mariela
    TSU - 4A - DSM
    Febrero/02/2024
    Examen parcial 1.
*/

//Como se pide entrada al usuario, se instalo npm install readline
// --> Se consideran TODOS LOS PENDIENTES aquellos que tienen 'completed' tanto TRUE como FALSE (los 200)
// --> Se consideran PENDIENTES RESUELTOS todos aquellos cuyo 'completed' es TRUE
// --> Se consideran PENDIENTES SIN RESOLVER todos aquellos cuyo 'completed' es FALSE

var url = "http://jsonplaceholder.typicode.com/todos"

//Se importa la libreria para leer la opcion del usuario
const readline = require('readline');

//Permite leer lo introducido por el usuario
const read = readline.createInterface
(
    {
        input: process.stdin,
        output: process.stdout
    }
);

function menuLigaNFL()
{
    //Se muestra un menu donde se indica de que va el programa y que seleccione una opcion
    console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");
    console.log("\n\t\t**Menú de la Liga de la NFL**");
    console.log("\t-- Selecciona una de las siguientes opciones: --");
    console.log("\n1. Lista de TODOS los pendientes (solo IDs)");
    console.log("2. Lista de TODOS los pendientes (IDs y Titles)");
    console.log("3. Lista de todos los pendientes SIN RESOLVER (IDs y Titles)");
    console.log("4. Lista de todos los pendientes RESUELTOS (IDs y Titles)");
    console.log("5. Lista de TODOS los pendientes (IDs y userID)");
    console.log("6. Lista de TODOS los pendientes RESUELTOS (IDs y userID)");
    console.log("7. Lista de TODOS los pendientes SIN RESOLVER (IDs y userID)");
    console.log("8. Salir");

    //Se lee lo ingresado y si la promesa se cumple se ejecuta lo siguiente
    read.question('Ingresa el número de opción deseado: ', (input) => {
        let opcion = parseInt(input);
        
        //Si lo ingrresado no se cumple, entonces NO es un NUMERO, y se vuelve a pedir
        if (isNaN(opcion)) 
        {
            console.log("Error. Selecciona una opcion valida. ");
            //Vuelve a aparecer el menu
            menuLigaNFL(); 
            return;
        }

        //Si es numero entonces manda a llamar los casos, donde se muestra la info de la NFL segun los datos solicitados
        switch (opcion) 
        {
            //Lista de todos los pendientes
            case 1:
                fetch(url)
                    .then(response => response.json())
                    .then(data => 
                        {
                            //SI la promesa se cumple, entonces...
                            console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");
                            console.log("\n========== Lista de todos los pendientes (solo IDs): =========");
                            data.forEach(item => {
                            {
                                //Muestra TODOS LOS id, tanto completos como incompletos
                                console.log("\nID: -- " + item.id);
                            }
                        });
                        menuLigaNFL();
                    })
                    //Valida si no se puede acceder a la url
                .catch(error => 
                {
                    console.log("Error al obtener los datos:", error);
                    menuLigaNFL();
                });
            break;
                    
            case 2:
                fetch(url)
                    .then(response => response.json())
                    .then(data => 
                        {
                            //SI la promesa se cumple, entonces...
                            console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");
                            console.log("\n======= Lista de todos los pendientes (IDs y Titles): ========");
                            data.forEach(item => {
                            {
                                //Muestra el id y titulos
                                console.log("\nID: ------ " + item.id);
                                console.log("Titles: -- " + item.title);
                            }
                        });
                        menuLigaNFL();
                    })
                //Valida si no se puede acceder a la url
                .catch(error => 
                {
                    console.log("Error al obtener los datos:", error);
                    menuLigaNFL();
                });
            break;

            case 3:
                fetch(url)
                    .then(response => response.json())
                    .then(data => 
                        {
                            //SI la promesa se cumple, entonces...
                            console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");
                            console.log("\n======= Lista de todos los pendientes SIN RESOLVER (IDs y Titles): ========");
                            data.forEach(item => {
                            //Si el atributo completed ES FALSO, entonces son pendientes SIN RESOLVER y se muestra en pantalla
                            if (!item.completed) 
                            {
                                //Muestra el id y titulos
                                console.log("\nID: ------ " + item.id);
                                console.log("Titles: -- " + item.title);
                            }
                        });
                        menuLigaNFL();
                    })
                //Valida si no se puede acceder a la url
                .catch(error => 
                {
                    console.log("Error al obtener los datos:", error);
                    menuLigaNFL();
                });
            break;
    
            case 4:
                fetch(url)
                    .then(response => response.json())
                    .then(data => 
                        {
                            //SI la promesa se cumple, entonces...
                            console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");
                            console.log("\n======= Lista de todos los pendientes RESUELTOS (IDs y Titles): ========");
                            data.forEach(item => {
                            //Si el atributo completed ES VERDADERO, entonces son pendientes RESUELTOS y se muestra n en pantalla
                            if (item.completed) 
                            {
                                //Muestra el id y titulos
                                console.log("\nID: ------ " + item.id);
                                console.log("Titles: -- " + item.title);
                            }
                        });
                        menuLigaNFL();
                    })
                //Valida si no se puede acceder a la url
                .catch(error => 
                {
                    console.log("Error al obtener los datos:", error);
                    menuLigaNFL();
                });
            break;
    
            case 5:
                fetch(url)
                    .then(response => response.json())
                    .then(data => 
                        {
                            //SI la promesa se cumple, entonces...
                            console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");
                            console.log("\n======= Lista de todos los pendientes (IDs y userIDs): ========");
                            data.forEach(item => {
                            {
                                //Muestra el id y titulos
                                console.log("\nID: ------ " + item.id);
                                console.log("UserID: -- " + item.userId);
                            }
                        });
                        menuLigaNFL();
                    })
                //Valida si no se puede acceder a la url
                .catch(error => 
                {
                    console.log("Error al obtener los datos:", error);
                    menuLigaNFL();
                });
            break;

            case 6:
                fetch(url)
                    .then(response => response.json())
                    .then(data => 
                        {
                            //SI la promesa se cumple, entonces...
                            console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");
                            console.log("\n======= Lista de todos los pendientes RESUELTOS (IDs y userID): ========");
                            data.forEach(item => {
                            //Si el atributo completed ES VERDADERO, entonces son pendientes RESUELTOS y se muestra n en pantalla
                            if (item.completed) 
                            {
                                //Muestra el id y titulos
                                console.log("\nID: ------ " + item.id);
                                console.log("UserID: -- " + item.userId);
                            }
                        });
                        menuLigaNFL();
                    })
                //Valida si no se puede acceder a la url
                .catch(error => 
                {
                    console.log("Error al obtener los datos:", error);
                    menuLigaNFL();
                });
            break;
    
            case 7:
                fetch(url)
                    .then(response => response.json())
                    .then(data => 
                        {
                            //SI la promesa se cumple, entonces...
                            console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");
                            console.log("\n======= Lista de todos los pendientes RESUELTOS (IDs y userID): ========");
                            data.forEach(item => {
                            //Si el atributo completed ES FALSO, entonces son pendientes NO RESUELTOS y se muestra n en pantalla
                            if (!item.completed) 
                            {
                                //Muestra el id y titulos
                                console.log("\nID: ------ " + item.id);
                                console.log("UserID: -- " + item.userId);
                            }
                        });
                        menuLigaNFL();
                    })
                //Valida si no se puede acceder a la url
                .catch(error => 
                {
                    console.log("Error al obtener los datos:", error);
                    menuLigaNFL();
                });
            break;
    
            case 8:
                console.log("\nGracias por utilizar el software oficial de la gesti[on de la NFL");
                console.log(".");
                console.log("..");
                console.log("...");
                console.log("Saliendo del programa...");

                read.close();
                break;

            default:
                console.log("Error. Selecciona una opcion valida. ");
                menuLigaNFL(); 
                break;
        }
    });
}
//Llamada de la funcion
menuLigaNFL();
