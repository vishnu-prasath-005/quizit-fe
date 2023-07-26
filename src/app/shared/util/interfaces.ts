export interface Exam {
  exam_id : number,
  exam_title : string,
  total_marks : number,
  pass_marks : number,
  category : string
} 

export interface Questions {
  question : string ,
  timing : string,
  Choices :  Choices[]
}

export interface Choices {
  is_correct_option : boolean,
  choice : string
}

export interface QuestionWithSubmittedAnswers { 
  question : string ,
  score? : number ,
  correctAnswer? : string
}

export interface UserReports {
  category : string,
  exam_title : string,
  pass_marks : number,
  total_marks : number
  Reports : Reports[]
}

export interface Reports {
  obtained_marks : number,
  verdict : string;
}