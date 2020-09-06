n=int(input("Enter the altitude : "))
if n in range(1,1000):
  print("Safe to Land")
elif n in range(1001,5000):
  print("Bring down to 1000")
elif n in range(5001,1000000000):
  print("Turn Around")

