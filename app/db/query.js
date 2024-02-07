module.exports = {
  GetListWordsByListId: (listID) => {
    return `SELECT w.id, w.question, w."check"
            FROM Words w
            JOIN VocabularyLists vl
            CROSS JOIN Word_List wl ON wl.wordId = w.id AND wl.listId = vl.id 
            WHERE wl.listId = ${listID} `;
  },
  GetListsAll: () => {
    return `SELECT id, title, description 
            FROM VocabularyLists`;
  },
  GetRandomWords: (num) => {
    return `SELECT id, question, "check" 
            FROM Words 
            ORDER BY RANDOM() LIMIT ${num}`;
  },
};
