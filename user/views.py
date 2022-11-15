from django.contrib.auth.decorators import login_required
from django.contrib import messages
from django.contrib.auth import update_session_auth_hash
from django.contrib.auth.forms import PasswordChangeForm
from django.shortcuts import render, redirect
from django.contrib.auth.models import User
from django.views import View
# from django.contrib.auth import login
from .forms import UserUpdateForm, ProfileUpdateForm
from django.contrib.auth import views as auth_views

def login(request, *args, **kwargs):
    """ 
    Summary line. 
  
    This function authenticate Username and Password and redirect to respective page
  
    Parameters: 
    request : get username and password
    *args and **kwargs : extra default parameter
  
    Returns: 
    redirect to login page or summary page
  
    """
    try:
        remember = request.POST['remember_me']
        if remember:
            settings.SESSION_EXPIRE_AT_BROWSER_CLOSE = False
    except MultiValueDictKeyError:
        is_private = False
        settings.SESSION_EXPIRE_AT_BROWSER_CLOSE = True
    return auth_views.login(request, *args, **kwargs)

@login_required
def profile(request):
    """ 
    Summary line. 
  
    This function update user profile image, username
  
    Parameters: 
    request : get username and image url file path
  
    Returns: 
    success and fail messge and redirect to login page
  
    """
    if request.method == 'POST':
        p_form = ProfileUpdateForm(request.POST,request.FILES,instance=request.user.profile)

        if p_form.is_valid():
            p_form.save()
            messages.success(request, f'Your account has been updated!')
            return redirect('profile')            
    else:
        p_form = ProfileUpdateForm(instance=request.user.profile)

    context = {
        'p_form': p_form
    }
    
    return render(request, 'user/profile.html', context)

@login_required
def change_password(request):
    """ 
    Summary line. 
  
    This function update user password
  
    Parameters: 
    request : get old password and new password of user
  
    Returns: 
    success and fail message whether password update or not and redirect to login page.
  
    """
    if request.method == 'POST':
        form = PasswordChangeForm(request.user, request.POST)
        if form.is_valid():
            user = form.save()
            update_session_auth_hash(request, user)  # Important!
            messages.success(request, 'Your password was successfully updated!')
            return redirect('change_password')
        else:
            messages.error(request, 'Please correct the error below.')
    else:
        form = PasswordChangeForm(request.user)
    return render(request, 'user/change_password.html', {
        'form': form
    })