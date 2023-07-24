export interface Exam {
  exam_id : number,
  exam_title : string,
  total_marks : number,
  pass_marks : number,
  category : string
} 

export interface Questions {
  question : string ,
  Choices :  Choices[]
}

interface Choices {
  is_correct_option : boolean,
  choice : string
}

export interface QuestionWithSubmittedAnswers { 
  question?: string ,
  score : number 
}