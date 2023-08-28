
const List = [
  {
    "no": 1,
    "title": "문의 제목입니다.",
    "content": "첫번째 게시글 내용입니다.",
    "createDate": "2020-10-25",
    "readCount": 6
  },
  {
    "no": 2,
    "title": "문의 제목입니다.",
    "content": "두번째 게시글 내용입니다.",
    "createDate": "2020-10-25",
    "readCount": 5
  },
  {
    "no": 3,
    "title": "문의 제목입니다.",
    "content": "세번째 게시글 내용입니다.",
    "createDate": "2020-10-25",
    "readCount": 1
  },
  {
    "no": 4,
    "title": "문의 제목입니다.",
    "content": "네번째 게시글 내용입니다.",
    "createDate": "2020-10-25",
    "readCount": 2
  },
  {
    "no": 5,
    "title": "문의 제목입니다.",
    "content": "다섯번째 게시글 내용입니다.",
    "createDate": "2020-10-25",
    "readCount": 4
  },
];

const getPostByNo = no => {
  const array = List.filter(x => x.no == no);
  console.log(no)
  if (array.length == 1) {
    return array[0];
  }
  return null;
}

export {
  List,
  getPostByNo
};
