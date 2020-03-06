Page({
  data: {
    articles: [
      {
        'id': 1,
        'name':'hello world',
        'count': 1
      },
      {
        'id': 2,
        'name': 'java',
        'count': 2
      },
      {
        'id': 3,
        'name': 'C++',
        'count': 2
      },
      {
        'id': 4,
        'name': 'python',
        'count': 2
      },

    ],
    isLoadingMore: false,
    currentPage: 1,
    info: ''
  }
})
