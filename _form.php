<form name='form_documentosComunicados' id='form_documentosComunicados'>
                            <!-- <input type="hidden" id="jsonInput" name="usuariosFiltrados" value=""> -->
                            <div class="row">
                                <div class="col-md-12">
                                    <div class="card mb-4">
                                        <h6 class="card-header">Detalle del comunicado</h6>
                                        <div class="card-body">
                                            <!-- Año -->
                                            <div class="form-row">
                                                <div class="form-group col-md-3"></div>
                                                <div class="form-group col-md-5">
                                                    <label class="form-label"><b>Año</b></label>
                                                    <select name='anio' id='anio' class='custom-select flex-grow-1' required>
                                                        <option value=''>Selecciona un año</option>
                                                        <option value='2026'>2026</option>
                                                        <option value='2025'>2025</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <!-- Mes  -->
                                            <div class="form-row">
                                                <div class="form-group col-md-3"></div>
                                                <div class="form-group col-md-5">
                                                    <label class="form-label"><b>Mes</b></label>
                                                    <select name='mes' id='mes' class='custom-select flex-grow-1' required>
                                                        <option value=''>Selecciona un mes</option>
                                                        <option value='01'>Enero</option>
                                                        <option value='02'>Febrero</option>
                                                        <option value='03'>Marzo</option>
                                                        <option value='04'>Abril</option>
                                                        <option value='05'>Mayo</option>
                                                        <option value='06'>Junio</option>
                                                        <option value='07'>Julio</option>
                                                        <option value='08'>Agosto</option>
                                                        <option value='09'>Septiembre</option>
                                                        <option value='10'>Octubre</option>
                                                        <option value='11'>Noviembre</option>
                                                        <option value='12'>Diciembre</option>
                                                    </select>
                                                </div>
                                                <div class="form-group col-md-3"></div>
                                            </div>
                                            <!-- Comunicado -->
                                            <div class="form-row">
                                                <div class="form-group col-md-3"></div>
                                                <div class="form-group col-md-5">
                                                    <label class="form-label"><b>Lectura</b></label>
                                                    <div class="clearfix"></div>
                                                    <select class='custom-select flex-grow-1' name='comunicado' id='comunicado' required>
                                                        <option value=''>Selecciona una opción</option>
                                                    </select>
                                                </div>
                                                <div class="form-group col-md-3"></div>
                                            </div>
                                            <!-- Botón  -->
                                            <div class="form-row">
                                                <div class="form-group col-md-3"></div>
                                                <div class="form-group col-md-5" align='center'>
                                                    <div class="form-group"><br>
                                                        <input type='submit' name='form_button' id='form_button' value='Consultar'>
                                                    </div>
                                                </div>
                                                <div class="form-group col-md-3"></div>
                                            </div>
                                            <!-- Resultado  -->
                                            <div class="form-row">
                                                <div class="form-group col-md-12">
                                                    <div id="resultado_consulta"></div>
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </form>
