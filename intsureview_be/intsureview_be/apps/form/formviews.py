from rest_framework import serializers, status, viewsets
from rest_framework.response import Response
from .models import Form 

class FormSerializer(serializers.Serializer):
    firstname = serializers.CharField()
    lastname = serializers.CharField()
    email = serializers.EmailField()
    password = serializers.CharField()
    willReceivePromotions = serializers.BooleanField()
    howDidYouHear = serializers.CharField()

    def create(self, validated_data):
        return Form.objects.create(**validated_data)

class FormViewSet(viewsets.ViewSet):
    def create(self, request):
        serializer = FormSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response({'message': 'Form submitted successfully.'})
        else:
            # As far as I understand this will throw a 400 error no matter what the error is.
            # In a production environment would have to set more specific handling for others kinds of errors
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


