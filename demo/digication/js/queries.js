var path      = '/test/courses/9/',
	eventname = 'rubric_score';

function normalize(s)
{
	s = s.replace(/[\s()-]+/g, '_').toLowerCase();
	if(s.substr(-1) == '_')
		s = s.substr(0, s.length - 1);
	return s;
}

function gender_scores(teacher)
{
	var wfemale = { student_gender : "female" },
		wmale = { student_gender : "male" };
	if(teacher)
	{
		wmale.teacher = wfemale.teacher = teacher;
	}
	ReportGrid.barChart('#gender_scores', {
		axes : [
			{
				type : 'student_score',
				values : [0,0.5,1,1.5,2,2.5,3,3.5,4,4.5,5,5.5,6,6.5,7,7.5,8,8.5,9,9.5,10]
			},
			'count'
		],
		load : ReportGrid.query
			.histogram({
				path : path,
				event : eventname,
				property : 'student_score',
				where : wmale
			})
			.stackStore()
			.stackClear()
			.histogram({
				path : path,
				event : eventname,
				property : 'student_score',
				where : wfemale
			})
			.stackRetrieve(),
		options : {
			stacked : false,
			label : {
				datapointover : function(dp, stats) {
					return dp.student_gender + ", score: " + dp.student_score + ", qt: " + dp.count;
				}
			},
			barpadding : 4
		}
	})
}

function comments_by_gender(teacher)
{
	var p = path + (teacher ? normalize(teacher) : '');
	ReportGrid.pieChart('#comments_by_gender', {
		axes : ['student_gender', 'count'],
		load : ReportGrid.query
			.count({
				path : p,
				event : eventname,
				where : { student_gender : 'male', comment_exists : true}
			})
			.stackStore().stackClear()
			.count({
				path : p,
				event : eventname,
				where : { student_gender : 'female', comment_exists : true}
			})
			.stackRetrieve()
	})
}

function comments_by_major(teacher)
{
	var p = path + (teacher ? normalize(teacher) : '');
	ReportGrid.pieChart('#comments_by_major', {
		axes : ['student_major', 'count'],
		load : ReportGrid.query
			.histogram({
				path : p,
				event : eventname,
				property : 'student_major'
			})
			.sortValue('student_major', false)
			.limit(10)
			.map(function(o) {
				return {
					path : p,
					event : eventname,
					where : { student_major : o.student_major, comment_exists : true }
				};
			})
			.count()
			.sortValue('count', false),
		options : {
			labelradius : 0.25
		}
	})
}

function comments_sentiment(teacher)
{
	var p = path + (teacher ? normalize(teacher) : '');
	ReportGrid.barChart('#comments_sentiment', {
		axes : ['comment_sentiment', 'count'],
		load : ReportGrid.query
			.histogram({
				path : p,
				event : eventname,
				property : 'comment_sentiment',
				where : { student_gender : 'male' }
			})
			.stackStore().stackClear()
			.histogram({
				path : p,
				event : eventname,
				property : 'comment_sentiment',
				where : { student_gender : 'female'}
			})
			.stackRetrieve()
	})
}



function average_score_by_major(teacher)
{
	if(!teacher)
	{
		$('#average_score_by_major').html('');
		return;
	}
	majors(teacher, function(majors) {
		ReportGrid.barChart('#average_score_by_major', {
			axes : ['major', { type : 'mean', view : [0,10] }],
			load : ReportGrid.query
				.data(majors)
				.map(function(major) {
					return {
						path : path + normalize(teacher) + '/' + normalize(major),
						event : eventname,
						property : 'student_score',
						type : 'mean',
						major : major
					};
				})
				.summary(null, ['major'])
				.stackMerge(),
			options : {
				labelorientation : "align"
			}
		});
	});
}

function average_score_by_major_series(teacher)
{
	if(!teacher)
	{
		$('#average_score_by_major_series').html('');
		return;
	}
	majors(teacher, function(majors) {
		ReportGrid.lineChart('#average_score_by_major_series', {
			axes : ['time:day', { type : 'mean', view : [0,10] }],
			load : ReportGrid.query
				.data(majors)
				.map(function(major) {
					return {
						path : path + normalize(teacher) + '/' + normalize(major),
						event : eventname,
						property : 'student_score',
						type : 'mean',
						major : major
					};
				})
				.summarySeries({
					periodicity : 'day',
					start : '2011-08-30',
					end : '2012-05-30'
				}, ['major']),
			options : {
				labelorientation : "align",
				segmenton : "major",
				interpolation : 'basis',
				symbol : ReportGrid.symbol("circle", 25),
				effect : 'dropshadow'
			}
		});
	});
}

function average_score_by_credits()
{
	ReportGrid.barChart('#average_score_by_credits', {
		axes : ['range', 'mean'],
		load : ReportGrid.query
			.data(['0-49','50-99','100-149','150-199','200-249','250-299'])
			.map(function(range) {
				return {
					path : path + '/' + range,
					event : eventname,
					property : 'student_score',
					type : 'mean',
					range : range
				};
			})
			.summary(null, ['range'])
	})
}

var teachers_map;
function average_score_by_teachers_for_program(program)
{
	ReportGrid.barChart('#average_score_by_teachers_for_program', {
		axes : ['teacher', { type : 'mean', view : [0,10] }],
		load : ReportGrid.query
			.data(teachers_map[program])
			.map(function(teacher) {
				return {
					path : path + '/' + normalize(teacher),
					event : eventname,
					property : 'student_score',
					type : 'mean',
					teacher : teacher
				};
			})
			.summary(null, ['teacher'])
	})
}

function average_score_by_teachers_for_program_series(program)
{
	ReportGrid.lineChart('#average_score_by_teachers_for_program_series', {
		axes : ['time:day', { type : 'mean', view : [0,10] }],
		load : ReportGrid.query
			.data(teachers_map[program])
			.map(function(teacher) {
				return {
					path : path + '/' + normalize(teacher),
					event : eventname,
					property : 'student_score',
					type : 'mean',
					teacher : teacher
				};
			})
			.summarySeries({
				periodicity : 'day',
				start : '2011-08-30',
				end : '2012-05-30'
			}, ['teacher']),
		options : {
			labelorientation : "align",
			segmenton : "teacher",
			interpolation : 'basis',
			symbol : ReportGrid.symbol("circle", 25),
			effect : 'dropshadow'
		}
	})
}

function programs_and_teachers(handler)
{
	ReportGrid.query.intersect({
		path : path,
		event : eventname,
		properties : ['teacher', 'program']
	}).execute(function(data) {
		teachers_map = {};
		for(var i = 0; i < data.length; i++)
		{
			(teachers_map[data[i].program] || (teachers_map[data[i].program] = [])).push(data[i].teacher);
		}
		var result = [];
		for(key in teachers_map)
			result.push(key);
		handler(result);
		average_score_by_teachers_for_program(result[0]);
		average_score_by_teachers_for_program_series(result[0]);
	});
}

function majors(teacher, handler)
{
	ReportGrid.query.values({
		path : path + normalize(teacher),
		event : eventname,
		property : 'student_major'
	})
	.map(function(o) { return o.value })
	.execute(handler);
}

function teachers(handler)
{
	ReportGrid.query.values({
		path : path,
		event : eventname,
		property : 'teacher'
	})
	.map(function(o) { return o.value })
	.execute(handler);
}