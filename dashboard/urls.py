
from django.conf.urls import url
from django.urls import path

from dashboard import views as FT_view

urlpatterns = [
    url(r"login_success/$", FT_view.login_success, name="login_success"),
    path(
        "dashboard/",
        FT_view.dashboard_home.as_view(),
        name="home_page",
    ),
path("create-industry",FT_view.add_industry,name="add_industry"),
path("job-profile",FT_view.create_job_profile,name="job_profile"),
path("add-job-profile",FT_view.add_job_profile,name="add_job_profile"),
path('edit-job-profile',FT_view.edit_job_industries,name="edit_job_profile"),
path('update-job-profile',FT_view.update_job_industries,name="update_job_profile"),
path('get-job-name',FT_view.get_job_name,name="get_job_name"),
    path("job-industry", FT_view.create_job_industries, name="job_industry"),
    path("delete-industry", FT_view.delete_industry, name="delete_industry"),
    path("delete-job-profile", FT_view.delete_job_profile, name="delete_job_profile"),
    path("user-details", FT_view.show_user, name="show_all_users"),
    path("delete-user", FT_view.delete_user, name="delete_user")
]
