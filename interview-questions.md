# ASSESSMENT 6: Interview Practice Questions
Answer the following questions.

First, without external resources. Challenge yourself to answer from memory.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely on your own, there is always something more to learn. Write your researched answer in your OWN WORDS.

1. As a developer, I am creating a Rails application with a model called Cohort that has_many students, but OOPS! I forgot to add the foreign key. How can I fix this mistake? What is the name of the foreign key? Would the foreign key be on the Cohort model or the Student model?

  Your answer: cohort model runs through students id and db migrate the new foreign key into the data

  Researched answer: a change can be made by running the rails generate migration. adding a column add column students, cohort id ,integer. then running db migrate



2. Which RESTful routes must always be passed params? Why?

  Your answer: urls? the params must always be passed because its telling the page what information to display

  Researched answer: RESTful routes are always passed parameters because the parameters are linked to the url and helps to get that data and diplay it or perform an action



3. Name three rails generator commands. What is created by each?

  Your answer: rails generate adds data, rails generate controller to make a controller, and mirgrate that interacts with the data 

  Researched answer: 

  rails generate adds data records, adds rows to the table, find data, update data, and remove data.

  rails generate controller the logical center of the application. It connects the interaction between the user, view, and the model. responsible for routing external requests.

  rails generate migration interacts with the data allowing you to evolve your data base. instead of making modifications in SQL.




4. Consider the Rails routes below. What is the name of the controller method that would be called by each route? What action would each of the controller methods perform? 

action: "GET"    location: /students          

shows a list of all students entered in the database

action: "POST"   location: /students         

creates a new form of data in the name of students

action: "GET"    location: /students/new     

calls students/new and shows a list of new students allowing you to edit students list

action: "GET"    location: /students/2       

accesses the student at the 2 index of the list of students to edit it

action: "GET"    location: /students/2/edit   

gets the student at the 2 index and allows you to edit that value in that index

action: "PATCH"  location: /students/2      

update the student at the 2 index and actually edits then pushes the new value of the student at index 2 into place

action: "DELETE" location: /students/2         

destroy the information at students index of 2 so it destroys student number 2 or the old information in index 2





5. As a developer, you are making an application to manage your to do list. Create 10 user stories that will help you get your application started. Read more about [user stories](https://www.atlassian.com/agile/project-management/user-stories).

as a [user] i can view a page that allows the [user] to [make: a to do list]
as a [user] i can view a page that allows the [user] to [view: their to do list]
as a [user] i can view a page that allows the [user] to [add: objectives to their to do list]
as a [user] i can view a page that allows the [user] to [remove: objectives from their to do list]
as a [user] i can view a page that allows the [user] to [mark: objectives done on their to do list]
as a [user] i can view a page that allows the [user] to [make: additional to do list]
as a [user] i can view a page that allows the [user] to [add: time sensitive objectives to their to do lists]
as a [user] i can view a page that allows the [user] to [remove: time sensitive objectives to their to do lists]
as a [user] i can view a page that [alerts the [user]: to time sensitive objectives on their to do lists]
as a [user] i can view a page that allows the [user] to [mark: time sensitive objectives on their to do lists as done]