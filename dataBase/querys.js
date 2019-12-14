

//List of the queries
const qGetTeachers = 'select p.persona_id, p.persona_dni, p.persona_apaterno, p.persona_amaterno, p.persona_nombres, d.celular, d.email  from persona p inner join docente d on p.persona_dni = d.nro_document'
//'SELECT  p.name_program, c.name_curso, t.name_teacher , t.ruc , tc.cant_hrs, c.cant_alumno, c.precio_hra, tc.pago_total FROM profesor_curso tc inner join teacher t on t.dni = tc.teacher_dni inner join curso c on c.idcurso=tc.curso_idcurso inner join program p on p.idprogram = c.program_idprogram';
const qGetByName = 'select c.nom_curso,cc.nom_ciclo, pg.nom_programa, pl.id_planilla, pl.persona_id, pl.id_curso,  pl.id_ciclo, pl.t_horas, pl.t_unidad, pl.importe, p.persona_dni, p.persona_apaterno, p.persona_amaterno, p.persona_nombres from persona p inner join planilla pl on p.persona_id = pl.persona_id inner join curso c on c.id_curso=pl.id_curso inner join ciclo cc on cc.id_ciclo = pl.id_ciclo inner join programa pg on c.id_programa = pg.id_programa WHERE p.persona_apaterno=$1 ';
//'SELECT  p.name_program, c.name_curso, t.name_teacher , t.ruc , tc.cant_hrs, c.cant_alumno, c.precio_hra, tc.pago_total FROM profesor_curso tc inner join teacher t on t.dni = tc.teacher_dni inner join curso c on c.idcurso=tc.curso_idcurso inner join program p on p.idprogram = c.program_idprogram WHERE dni = $1';
const qGetTeachersByDni = 'select p.persona_id, p.persona_dni, p.persona_apaterno, p.persona_amaterno, p.persona_nombres, d.celular, d.email  from persona p inner join docente d on p.persona_dni = d.nro_document WHERE p.persona_dni=$1';
//'SELECT  p.name_program, c.name_curso, t.name_teacher , t.ruc , tc.cant_hrs, c.cant_alumno, c.precio_hra, tc.pago_total FROM profesor_curso tc inner join teacher t on t.dni = tc.teacher_dni inner join curso c on c.idcurso=tc.curso_idcurso inner join program p on p.idprogram = c.program_idprogram WHERE dni = $1';

const qGetTramitesByDni = 'select c.nom_curso,cc.nom_ciclo, pg.nom_programa, pl.id_planilla, pl.persona_id, pl.id_curso,  pl.id_ciclo, pl.t_horas, pl.t_unidad, pl.importe, p.persona_dni, p.persona_apaterno, p.persona_amaterno, p.persona_nombres from persona p inner join planilla pl on p.persona_id = pl.persona_id inner join curso c on c.id_curso=pl.id_curso inner join ciclo cc on cc.id_ciclo = pl.id_ciclo inner join programa pg on c.id_programa = pg.id_programa  where p.persona_dni =$1'

const qPostNewTramiteById = 'insert into planilla(persona_id,id_curso,id_ciclo,t_horas,t_unidad,importe) values ($1, $2, $3, $4, $5, $6)'


const qPutTramiteById = 'update planilla set t_horas=$2, t_alumnos=$3, t_unidad=$4, importe=$5  where id_planilla=$1'

const qLogin = 'SELECT * FROM usuarios WHERE username= $1 AND password = crypt($2, password)';
const qLoggedOn = 'UPDATE usuarios SET logged = true WHERE username= $1';
const qLoggedOff = 'UPDATE usuarios SET logged = false WHERE username= $1';
const qGetbetween = 'SELECT * FROM docente WHERE per_academico BETWEEN $1 AND $2';
const qSingUp = 'INSERT INTO usuarios ( username, password, email, numberphone) VALUES ($1, CRYPT( $2 ,gen_salt($5)),$3, $4 )';

module.exports = {
    qGetTeachers,
    qGetByName,
    qGetTeachersByDni,
    qGetTramitesByDni,
    qPostNewTramiteById,
    qPutTramiteById
}