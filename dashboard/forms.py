from django import forms
from django.forms import ModelForm
from .models import Job_industries


class job_industry_form(forms.ModelForm):
    industry_name = forms.CharField(widget=forms.TextInput(
        attrs={'placeholder': "Industries"}), max_length=100, required=False)

    class Meta:
        model = Job_industries
        fields = ["name"]


class total_records_form(forms.ModelForm):
    total_industry = forms.CharField(widget=forms.TextInput(
        attrs={'placeholder': "Industries"}), max_length=100, required=False)
    total_user = forms.CharField(widget=forms.TextInput(
        attrs={'placeholder': "User"}), max_length=100, required=False)

    class Meta:
        model = Job_industries
        fields = ["name"]
