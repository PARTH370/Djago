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
    companey_name= forms.CharField(widget=forms.TextInput(attrs={'placeholder':"Industries"}), max_length=100, required=False)
    job_Title= forms.CharField(widget=forms.TextInput(attrs={'placeholder':"Softwere Developer"}), max_length=100, required=False)
    job_type= forms.CharField(widget=forms.TextInput(attrs={'placeholder':"SDE"}), max_length=1000, required=False)
    job_Category= forms.CharField(widget=forms.TextInput(attrs={'placeholder':"It"}), max_length=1000, required=False)
    job_skill= forms.CharField(widget=forms.TextInput(attrs={'placeholder':"Python"}), max_length=1000, required=False)
    gender= forms.CharField(widget=forms.TextInput(attrs={'placeholder':"Any"}), max_length=10, required=True)
    job_exp_date= forms.DateField( widget=DatePickerInput(format='%Y-%m-%d'),required=True)
    salary= forms.CharField(widget=forms.TextInput(attrs={'placeholder':"3,00,000"}), max_length=1000, required=False)
    country= forms.CharField(widget=forms.TextInput(attrs={'placeholder':"India"}), max_length=100, required=False)
    state= forms.CharField(widget=forms.TextInput(attrs={'placeholder':"Gujarat"}), max_length=100, required=False)
    city= forms.CharField(widget=forms.TextInput(attrs={'placeholder':"Surat"}), max_length=100, required=False)
    career_level= forms.CharField(widget=forms.TextInput(attrs={'placeholder':"SDE-1"}), max_length=100, required=False)
    degree_level= forms.CharField(widget=forms.TextInput(attrs={'placeholder':"BE"}), max_length=100, required=False)
    job_experience= forms.CharField(widget=forms.TextInput(attrs={'placeholder':"2 YEAR"}), max_length=100, required=False)
    description= forms.CharField(widget=forms.TextInput(attrs={'placeholder':"Description"}), max_length=10000, required=False)
    remote_work= forms.CharField(widget=forms.TextInput(attrs={'placeholder':"No"}), max_length=100, required=False)

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
