# Testing

I've decided that i would divide my test effort to two parts. Frontend and Backend.

## Frontend

As I didn't have much time available for the development of the application I decided that I would focus on solely testing and validating the functionality of the different actions the "user" can perform. I've written down the major test cases that i focused on testing and validating.

Test case 1.1: Adding a box (Invalid information).
  Test steps:
    1. Enter [ Reciever ]: Test.
    2. Enter [ Weight ]: NoTaNuMbEr.
    3. Select [ Color ]: Pick a color / Use the existing color.
    4. Select [ Country ]: Pick a country / Use the existing country.
    5. Submit: Click the submit button.
  Outcome:
    A waring text should appear saying you can't submit anything other than a valid number. If you would proceed to submit anyway you should be greeted with another warning saying you have information to correct.

Test case 1.2: Adding a box (Valid information).
  Test steps:
    1. Enter [ Reciever ]: Test.
    2. Enter [ Weight ]: 2.
    3. Select [ Color ]: Pick a color / Use the existing color.
    4. Select [ Country ]: Pick a country / Use the existing country.
    5. Submit: Click the submit button.
  Outcome:
    No waring text should appear. If you would proceed to submit the box you should be greeted with a success message. As well as a number in the top right corner representing the number of new boxes you can list.

Test case 1.3: Adding a box (Without network access to backend).
  Test steps:
    1. Enter [ Reciever ]: Test.
    2. Enter [ Weight ]: 2.
    3. Select [ Color ]: Pick a color / Use the existing color.
    4. Select [ Country ]: Pick a country / Use the existing country.
    5. Submit: Click the submit button.
  Outcome:
    No waring text should appear. If you would proceed to submit the box you should be greeted with an error message saying there is currently a network error.

Test case 1.4: List boxes (With network access to backend).
  Test steps:
    1. Visit /listboxes or click the truck -icon.
  Outcome:
    You should be greeted with an informational message and if there is existing boxes retrieved from the backend those should be displayed, else only the static headers such as (Receiver, Weight, Color, Shipping cost).

Test case 1.5: List boxes (Without network access to backend).
  Test steps:
    1. Visit /listboxes or click the truck -icon.
  Outcome:
    You should be greeted with an error message saying there is currently a network error and that you are looking at old data.

## Backend

When I was testing the backend API I was going to prioritize in a similiar way as when testing the frontend. The most important part is functionality of the application and that no errors occur in the chain of events. The most important thing is if bad data would be submitted the backend server dont crash and stop, meaing the error is handled in some way. I've written down the major test cases that i focused on testing and validating.

Test case 2.1: GET /api/boxes.
  Test steps:
    1. Perform a GET request to the backend at /api/boxes.
  Outcome:
    You should be responded with an empty array or an array of objects(boxes). 

Test case 2.2: POST /api/boxes (Invalid information).
  Test steps:
    1. Perfrom a POST request to the backend at /api/boxes. The request should consist of a JSON body containing the key-value pairs:
      - name: string
      - weight: number
      - color: string
  Outcome:
    You should be responded with a 400 "Bad Request".

Test case 2.3: POST /api/boxes (Valid information).
  Test steps:
    1. Perfrom a POST request to the backend at /api/boxes. The request should consist of a JSON body containing the key-value pairs:
      - name: string
      - weight: number
      - color: string
      - country: string
  Outcome:
    You should be responded with a 200 and the content you POSTed in the responsebody.