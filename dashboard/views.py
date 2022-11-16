from datetime import datetime, date
from dateutil.relativedelta import relativedelta
from django.shortcuts import render
from django.shortcuts import redirect
from django.views.generic import ListView, CreateView
from django.contrib.auth.mixins import LoginRequiredMixin
from django.contrib.auth.decorators import login_required
from dashboard.forms import job_industry_form ,total_records_form, job_profile_form
from django.http import JsonResponse
from dashboard.models import  Job_industries ,job_profiles
from dashboard.forms import job_industry_form, total_records_form
from django.http import JsonResponse
from dashboard.models import Job_industries
from django.contrib.auth.models import User

def login_success(request):
    """
    Redirects users based on whether they are in the admins group
    """
    id = request.user.id
   
    print('id', id)
    print(request.user.username)
    return redirect("home_page")


class dashboard_home(LoginRequiredMixin, CreateView):
    """ 
        Summary line. 
        This class Show the admin dashboard

    """
    model = Job_industries
    template_name = 'public/record.html'
    form_class = total_records_form
    def get_form(self, form_class=total_records_form):
        form = super(dashboard_home, self).get_form(form_class)
        form.fields['total_industry'].initial = Job_industries.objects.filter(status=1).count()
        form.fields['total_user'].initial = User.objects.all().count()
        return form

@login_required
def create_job_industries(request):
    form = job_industry_form()
    available_industries=Job_industries.objects.filter(status=1).values_list('name','id')
    data=[]
    for i in range(len(available_industries)):
        data.append([i,str(available_industries[i][0]),'<a class="btn btn-info btn-sm" values=('+str(available_industries[i])+') onclick="edit('+str(available_industries[i][1])+')">' + 'Edit' + '</a>','<a class="btn btn-info btn-sm"  onclick="delete_industry('+str(available_industries[i][1])+')">' + 'Delete' + '</a>'])
    return render(request, 'public/new.html',{'form':form,'available_industries':data})

@login_required
def add_industry(request):
    industry = request.GET.get("industry_name")
    data = {'added': False}
    print(industry, request.user.id)
    if not Job_industries.objects.filter(name=industry).exists():
        print(Job_industries.objects.filter(name=industry).exists())
        add_industry_obj = Job_industries(name=industry, status=1, updated_by_user_id=int(
            request.user.id), created_on=datetime.now(), updated_on=datetime.now())
        add_industry_obj.save()
        data['added'] = True
    return JsonResponse(data)

@login_required
def edit_job_industries(request):
    form = job_industry_form()
    return render(request, 'public/update_industry.html',{'form':form})

@login_required
def update_job_industries(request):
    id=request.GET.get("id")
    data={'added':False}
    find_data=Job_industries.objects.filter(id=id).exists()
    find_data1=Job_industries.objects.filter(name=request.GET.get("name")).exists()
    if find_data1:
        data['added']=False
        return JsonResponse(data)
    if find_data:
        find_data=Job_industries.objects.filter(id=id)
        add_industry_objet=find_data.update(name=request.GET.get("name"),updated_on=datetime.now())
        data['added']=True
    return JsonResponse(data)

@login_required
def delete_industry(request):
    id=request.POST.get("id")
    data={'is_taken':False}

    find_data=Job_industries.objects.filter(id=id)
    print(id,find_data.exists())
    if find_data.exists():
        add_industry_objet=find_data.update(status=0,updated_on=datetime.now())
        data['is_taken']=True
    return JsonResponse(data)

@login_required
def delete_job_profile(request):
    id=request.POST.get("id")
    data={'is_taken':False}

    find_data=job_profiles.objects.filter(id=id)
    if find_data.exists():
        add_industry_objet=find_data.update(status=0,updated_on=datetime.now())
        data['is_taken']=True
    return JsonResponse(data)

@login_required
def create_job_profile(request):
    form = job_profile_form()
    data=[]
    available_industries=job_profiles.objects.filter(status=1).values_list('id','companey_name','job_Title','job_Category','job_exp_date','updated_by_user_id')

    for i in range(len(available_industries)):
        data.append([i,str(available_industries[i][1]),str(available_industries[i][2]),str(available_industries[i][3]),str(available_industries[i][4]),str(available_industries[i][5]),'<a class="btn btn-info btn-sm" values=('+str(available_industries[i])+') onclick="edit('+str(available_industries[i][1])+')">' + 'Edit' + '</a>','<a class="btn btn-info btn-sm"  onclick="delete_job_profile('+str(available_industries[i][0])+')">' + 'Delete' + '</a>'])
   
    return render(request, 'public/job_profile.html',{'form':form,'available_industries':data})

@login_required
def get_job_name(request):
    id=request.GET.get("id")
    get_data=Job_industries.objects.filter(id=id).first()
    data={'added':get_data.name}
    return JsonResponse(data)

@login_required
def add_job_profile(request):
    industry=request.GET.get("companey_name")
    job_Title=request.GET.get("job_Title")
    JobType=request.GET.get("job_type")
 
    job_Category=request.GET.get("job_Category")
    job_skill=request.GET.get("job_skill")
    gender=request.GET.get("gender")
    
    job_url=request.GET.get("job_url")
    mobile_no=request.GET.get("mobile_no")
    email=request.GET.get("email")
    salary=request.GET.get("salary")
    country=request.GET.get("country")
    state=request.GET.get("state")
    city=request.GET.get("city")
    career_level=request.GET.get("career_level")
    degree_level=request.GET.get("degree_level")
    job_experience=request.GET.get("job_experience")
    description=request.GET.get("description")
    remote_work=request.GET.get("remote_work")

    data={'added':False}
    
    job_exp_date=str(date.today() +relativedelta(months=+3))
    
        
   
    add_industry_obj=job_profiles(job_type=JobType, email=email,mobile_no=mobile_no,job_url=job_url,companey_name=industry,status=1,job_Title=job_Title,job_Category=job_Category,job_skill=job_skill,gender=gender,job_exp_date=job_exp_date,salary_package=salary,country=country,state=state,city=city,career_level=career_level,degree_level=degree_level,job_experience=job_experience,description=description,remote_work=remote_work,updated_by_user_id=request.user.id,created_on=datetime.now(),updated_on=datetime.now())
    add_industry_obj.save()
    data['added']=True  
    return JsonResponse(data)





