from datetime import datetime
from django.shortcuts import render
from django.shortcuts import redirect
from django.views.generic import ListView, CreateView
from django.contrib.auth.mixins import LoginRequiredMixin
from django.contrib.auth.decorators import login_required
from dashboard.forms import job_industry_form, total_records_form
from django.http import JsonResponse
from dashboard.models import Job_industries
from django.contrib.auth.models import User


class dashboard_home(LoginRequiredMixin, CreateView):
    """ 
        Summary line. 
        This class shows table of daily nav summary 

    """
    model = Job_industries
    template_name = 'public/record.html'
    form_class = total_records_form

    def get_form(self, form_class=total_records_form):
        form = super(dashboard_home, self).get_form(form_class)
        form.fields['total_industry'].initial = Job_industries.objects.all().count()
        form.fields['total_user'].initial = User.objects.all().count()
        return form


def login_success(request):
    """
    Redirects users based on whether they are in the admins group
    """
    id = request.user.id
    print('id', id)
    print(request.user.username)
    return redirect("home_page")


@login_required
def create_job_industries(request):
    form = job_industry_form()
    available_industries = Job_industries.objects.all().values_list('name', 'id')

    data = []
    for i in range(len(available_industries)):
        data.append([available_industries[i][1], available_industries[i][0], '<a class="btn btn-info btn-sm"  onclick="edit('+available_industries[i]
                    [0]+')">' + 'Edit' + '</a>', '<a class="btn btn-info btn-sm"  onclick="delete('+available_industries[i][0]+')">' + 'Delete' + '</a>'])
    return render(request, 'public/new.html', {'form': form, 'available_industries': data})


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
