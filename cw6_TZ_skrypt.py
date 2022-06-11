#s25887 Tomasz Zielonka cw6
import riak

myClient = riak.RiakClient(pb_port=8087) #connecting to Riak
myBucket = myClient.bucket('s25887') #defining bucket to use

value = {"Marka auta": "Chrysler", "Pojemnosc silnika":3.6, "Rocznik":2021, "Numer rejestracyjny":"WB12345"} #defining data

key = myBucket.new('auto1', data = value) #creating key
key.store() #storing the new key

auto1_link = myBucket.get('auto1') #getting key

print("Data from auto1 key:", auto1_link.data) #printing data from key

auto1_link.data["Numer rejestracyjny"] = "LU25887" #modyfing value 
auto1_link.store() #storing new value

print("Data from auto1 key after modification: ",auto1_link.data) #printing data after modification

auto1_link.delete() #deleting the key

print("Try to get data after delete auto1: ",auto1_link.data) #trying to get data from non-existing key
