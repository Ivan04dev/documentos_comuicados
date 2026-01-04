$("document").ready(function(){
    console.log('Desde documentosConsulta_.js');
    const botonEliminar = document.getElementsByClassName("btn icon-btn btn btn-outline-danger waves-effect");
    
    var idComunicado;
    let anio = '';
    let mes = '';

    $("#anio").change(function(){
        anio = this.vaue;
        console.log('Año seleccionado: ', anio);
    })

    $("#mes").change(function(){
        mes = this.value;
        console.log('Mes seleccionado: ', mes);

        if(anio === '' || mes === ''){
            console.warn('Debes seleccionar año y mes');
            return;
        }

        $.get("_listadoLecturas_.php",{anio:anio, mes:mes})
        .done(function(data){

            $("#comunicado").empty();
            $("#resultado_consulta").empty();
            $("#comunicado").html(data);

        })   

    })

    $("#comunicado").change(function(){

        var idComunicado = this.value;

    })

    $(function() {

        jQuery("#form_documentosComunicados").validate({
            
            onfocusout: false,
            rules: {

                comunicado: {required: true}

            },

            submitHandler: function(form){

                var form =$('#form_documentosComunicados')[0];
                var data = new FormData(form);

                jQuery.ajax({

                    url: '_documentosLectura_.php',
                    type: 'POST',
                    enctype: 'multipart/form-data',
                    processData: false,
                    contentType: false,
                    serverSide: false,
                    cache: false,
                    dataType: 'html',
                    data: data,

                    beforeSend: function () {

                        $('#resultado_consulta').html("<div align='center'><img src='assets/img/4s-194px-1.gif' width='65' height='65'></div>");
                        document.getElementById("form_button").value = "Buscando...";
                        document.getElementById("form_button").disabled = true;

                    },

                    complete: function(xhr, textStatus) {

                        console.info("Comunicación ok");
                        
                        $('#documentosLecturas').dataTable({

                            "pageLength" : 10,
                            "order": [[ 0, "desc" ]]

                        });

                    },

                    success: function(data, textStatus, xhr) {

                        document.getElementById("form_button").value = "Consulta";
                        $("#resultado_consulta").empty();
                        $("#resultado_consulta").append(data);
                        document.getElementById("form_button").disabled = false;

                        console.log(botonEliminar);

                        $(botonEliminar).on("click", function() {
                            
                            // Obtener el valor del botón (por ejemplo, su atributo 'value')
                            let datosArchivo = $(this).val(); 

                            Swal.fire({

                                title: "¿Deseas eliminar el archivo?",
                                //text: "You won't be able to revert this!",
                                icon: "warning",
                                showCancelButton: true,
                                confirmButtonColor: "#008f39",
                                cancelButtonColor: "#d33",
                                confirmButtonText: "Confirmar",
                                cancelButtonText: "Cancelar"

                            }).then((result) => {
                                
                                if (result.isConfirmed) {

                                    $.get("documentosCargaElimina.php",{datosArchivo:datosArchivo})
                                    .done(function(data){

                                        console.log(data);
                            
                                        Swal.fire({
                                        
                                            title: "Eliminado",
                                            text: "El archivo se eliminó correctamente",
                                            icon: "success"
                                        
                                        });

                                        setTimeout(function() {
                                            window.location.href = "documentosConsulta_.php";
                                        }, 10000);
                            
                                    })
                                    
                                

                                
                                }

                            });

                    
                        });

                    },

                    error: function(xhr, textStatus, errorThrown) {

                        console.info("hay un error con el procesamiento del formulario.");

                    }

                });

            },

        });

    });    

})
