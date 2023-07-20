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
    
# Would use some kind of hashing to store password in production
    
class FormViewSet(viewsets.ViewSet):
    def create(self, request):
        try:
            serializer = FormSerializer(data=request.data)
            if serializer.is_valid():
                serializer.save()
                return Response({'message': 'Form submitted successfully.'})
            else:
                return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
        except Exception as e:
            return Response({'error': 'Internal server error.'}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)


