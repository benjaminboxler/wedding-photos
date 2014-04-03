class SessionsController < ApplicationController
  def new
  end

  def create
    user = User.find_by_email(params[:session][:email].downcase)
    if user
      sign_in user
      redirect_to user
    else
      flash[:error] = 'Email not recognised!'
      render new
    end
  end

  def destroy
    sign_out
    redirect_to signin_path
  end

end
