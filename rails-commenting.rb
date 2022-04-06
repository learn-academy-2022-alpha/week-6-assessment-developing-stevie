# ASSESSMENT 6: Rails Commenting Challenge

# Add comments to the Rails Blog Post Challenge
# Explain the purpose and functionality of the code directly below the 10 comment tags


# FILE: app/controller/blog_posts_controller.rb




# class of blogpostscontrollers 
# calls on ApplicationController method
# which calls the method index
# defines a method called index
# allowing you to call on the actions below
# ---1)
class BlogPostsController < ApplicationController
  def index


    # calls on instance variable @posts
    #  is equal to the value of all posts 
    # should allow all posts to logged on the html page
    # controlled by the class above when called on
    # end of method
    # ---2)
    @posts = BlogPost.all
  end




  # define a method called show
  # to show the following information logged by the code above
  # instance variable @posts equals blogpost find parameters method
  # used to find the parameters of the value of id 
  # it has brackets possibly the id is in an array all data is an array? 
  # and shows on the page
  # end of method
  # ---3)
  def show
    @post = BlogPost.find(params[:id])
  end



  # define a method called new
  # @post  equals BlogPost.new
  # allows you to create a new instance of blog post
  # not yet has been created in the data base
  # end of method
  # spaced line
  # define a method called create 
  # will create new blog post adding this code to the next
  # ---4)
  def new
    @post = BlogPost.new
  end

  def create



    # if @post is a valid post and has value
    # then redirect_to blog_post_path creating a blog post new post
    # else redirect_to new_blog_post_path taking you back
    # will not save entered info if any at all
    # end of method
    # end of method
    # line break
    # define method edit which will allow edits
    # ---5)
    @post = BlogPost.create(blog_post_params)
    if @post.valid?
      redirect_to blog_post_path(@post)
    else
      redirect_to new_blog_post_path
    end
  end

  def edit




    # instance variable @posts equals blogpost find parameters method id
    # of post to be edited
    # end of method
    # spaced line
    # define a method called update
    # that allows you to edit the instance variable 
    # @posts equals blogpost find parameters method of id that post 
    # and update the render
    # ---6)
    @post = BlogPost.find(params[:id])
  end

  def update
    @post = BlogPost.find(params[:id])
   

    # @post update method 
    # update blog_post_params
    # if @post is valid
    # redirect_to blog_post_path then post info to the blog post
    # else method
    # redirect_to edit_blog_post_path 
    # taking back to the main page due to not being valid 
    # end of method
    # end of method
    # spaced line
    # define method destroy
    # @post is equal to BlogPost find method 
    # find params array id
    # allowing you to find a post by the id found in the method and have the  
    # option to destroy
    # if @post destroy method deletes the post then
    # redirect_to blog_posts_path taking back to the main page
    # else
    # ---7)
    @post.update(blog_post_params)
    if @post.valid?
      redirect_to blog_post_path(@post)
    else
      redirect_to edit_blog_post_path
    end
  end

  def destroy
    @post = BlogPost.find(params[:id])
    if @post.destroy
      redirect_to blog_posts_path
    else
     

      # if canceled then 
      # redirect_to blog_post_path(@post) going back to 
      # the post allowing then to choose again if they would like to delete
      # end of method
      # end of method
      # ---8)
      redirect_to blog_post_path(@post)
    end
  end



      # private allows all info for posts to remain private calling on the
      # define a method called blog_post_params all info in post
       # ---9)
          private
          def blog_post_params
   
   


    # params require the post and 
    # the post permits the title and content to be allowed in the data
    # but must keep what is not called on off the page keeping it private
    # end of method
    # end of method
    # ---10)
    params.require(:blog_post).permit(:title, :content)
  end
end
