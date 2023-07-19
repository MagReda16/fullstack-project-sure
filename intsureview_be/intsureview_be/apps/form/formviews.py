from rest_framework import viewsets
from rest_framework.response import Response
from .models import Form

class FormViewSet(viewsets.ViewSet):
    def create(self, request):
        firstname = request.data.get('firstname')
        lastname = request.data.get('lastname')
        email = request.data.get('email')
        password = request.data.get('password')
        willReceivePromotions = request.data.get('willReceivePromotions')
        howDidYouHear = request.data.get('howDidYouHear')

        form_post = Form(
            firstname=firstname,
            lastname=lastname,
            email=email,
            password=password,
            willReceivePromotions=willReceivePromotions,
            howDidYouHear=howDidYouHear
        )
        form_post.save()
        print(form_post)
        return Response({'message': 'Form submitted successfully.'})


