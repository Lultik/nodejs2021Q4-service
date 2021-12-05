const DB = {
  users: [
    {
      'id': '5d120567-7f06-40f1-885d-0aef12c12d40',
      'name': 'Misha',
      'login': 'Lultik',
      'password': 'ijbs912-asfasf_askUFGK12314'
    },
    {
      'id': '27f5ae89-68c8-447d-8c04-d6d26467a212',
      'name': 'Yana',
      'login': 'Yanochka',
      'password': 'ijbs912'
    }
  ],
  boards: [
    {
      'id': '5d163267-7f06-40f1-885d-0aef12c12d40',
      'title': 'Backlog',
      'columns': [
        {
          'id': '5d120567-7f06-40f1-885d-0aef12c12d40',
          'title': 'To work',
          'order': 1
        },
        {
          'id': '5d120567-7f06-40f1-885d-0aef12c11s51',
          'title': 'Done',
          'order': 2
        }
      ]
    },
    {
      'id': '5d163267-7f01-40f1-885d-0aef12c12d40',
      'title': 'Kanban',
      'columns': [
        {
          'id': '5d120147-7f06-40f1-885d-0aef12c12d40',
          'title': 'Resolved',
          'order': 1
        },
        {
          'id': '5d120567-7f06-40f1-885d-0aef12c11s51',
          'title': 'Fixed',
          'order': 2
        }
      ]
    }
  ],
  tasks: []
};

module.exports = DB;
