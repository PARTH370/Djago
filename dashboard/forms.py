from django import forms
from django.forms import ModelForm
from .models import Job_industries, job_profiles
from bootstrap_datepicker_plus.widgets import DatePickerInput
from .models import Job_industries


class job_industry_form(forms.ModelForm):
    industry_name = forms.CharField(widget=forms.TextInput(
        attrs={'placeholder': "Industries"}), max_length=100, required=False)

    class Meta:
        model = Job_industries
        fields = ["name"]

class job_profile_form(forms.ModelForm):
    companey_name= forms.CharField(widget=forms.TextInput(attrs={'placeholder':"Companey Name","class":"field-style field-split align-left"}), max_length=100, required=True)
    job_Title= forms.CharField(widget=forms.TextInput(attrs={'placeholder':"Job Title","class":"field-style field-split align-right"}), max_length=100, required=True)
    job_type= forms.CharField(widget=forms.TextInput(attrs={'placeholder':"Job Type","class":"field-style field-split align-left"}), max_length=1000, required=True)
    job_Category= forms.CharField(widget=forms.TextInput(attrs={'placeholder':"Job Category","class":"field-style field-split align-right"}), max_length=1000, required=True)
    job_skill= forms.CharField(widget=forms.TextInput(attrs={'placeholder':"Job Skill","class":"field-style field-split align-left"}), max_length=1000, required=False)
    gender= forms.CharField(widget=forms.TextInput(attrs={'placeholder':"Gender","class":"field-style field-split align-right"}), max_length=10, required=True)
    # job_exp_date= forms.DateField( widget=DatePickerInput(format='%Y-%m-%d',attrs={'placeholder':"Job Expiry Date","class":"field-style field-split align-left"}),required=True)
    salary= forms.CharField(widget=forms.TextInput(attrs={'placeholder':"Salary","class":"field-style field-split align-right"}), max_length=1000, required=False)
    country= forms.CharField(widget=forms.TextInput(attrs={'placeholder':"Country","class":"field-style field-split align-left"}), max_length=100, required=False)
    state= forms.CharField(widget=forms.TextInput(attrs={'placeholder':"State","class":"field-style field-split align-right"}), max_length=100, required=False)
    city= forms.CharField(widget=forms.TextInput(attrs={'placeholder':"City","class":"field-style field-split align-left"}), max_length=100, required=False)
    career_level= forms.CharField(widget=forms.TextInput(attrs={'placeholder':"Careet Level","class":"field-style field-split align-right"}), max_length=100, required=False)
    degree_level= forms.CharField(widget=forms.TextInput(attrs={'placeholder':"Degree Level","class":"field-style field-split align-left"}), max_length=100, required=False)
    job_experience= forms.CharField(widget=forms.TextInput(attrs={'placeholder':"Job Experience","class":"field-style field-split align-right"}), max_length=100, required=False)
    description= forms.CharField(widget=forms.Textarea(attrs={'placeholder':"Description","class":"field-style"}), max_length=10000, required=False)
    form_url= forms.CharField(widget=forms.TextInput(attrs={'placeholder':"Form url","class":"field-style field-full align-none"}), max_length=10000, required=False)
    mobile_no= forms.CharField(widget=forms.TextInput(attrs={'placeholder':"Mobile No","class":"field-style field-full align-none"}), max_length=10000, required=False)
    remote_work= forms.CharField(widget=forms.TextInput(attrs={'placeholder':"Remote Work","class":"field-style field-split align-left"}), max_length=100, required=False)
    email= forms.EmailField(widget=forms.TextInput(attrs={'placeholder':"Email","class":"field-style field-split align-left"}), max_length=100, required=False)
    class Meta:
        model = job_profiles
        fields = ["companey_name","job_Title","job_type","job_Category","job_skill","gender","job_exp_date","salary_package","country","state","city","career_level","degree_level","job_experience","description","remote_work"]



class total_records_form(forms.ModelForm):
    total_industry = forms.CharField(widget=forms.TextInput(
        attrs={'placeholder': "Industries"}), max_length=100, required=False)
    total_user = forms.CharField(widget=forms.TextInput(
        attrs={'placeholder': "User"}), max_length=100, required=False)

    class Meta:
        model = Job_industries
        fields = ["name"]
