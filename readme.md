# Toy-Monster

Toy-Monster is an online toy store where users can explore and purchase a wide range of toys. The website offers a variety of features and sections to enhance the user experience.

## Home Route

This section describes the content available on the home page of the Toy-Monster website.

### Navigation Bar
- Logo and website name prominently displayed
- Home, All Toys, and Blogs links for easy navigation
- Login button to access user accounts

### Banner Section
- Engaging Lottie animation to capture attention
- Catchy title and descriptive text to highlight the website's offerings

### Just For You Section
- Personalized recommendations 

### Gallery Section
- Visually appealing grid layout showcasing a variety of toy images
- Each image represents a different toy category or theme

### Shop By Category Section
- Interactive tabs (Avenger, DC, Transformer) using React Tabs component
- Each tab displays subcategories of toys within the selected category
- Multiple toy options available within each subcategory
- Eye-catching cards presenting key details of each toy, including an image, name, and price
- "See More Details" button to explore additional information about the toy
- If logged in, users can access the toy details page directly
- If not logged in, a notification prompts users to log in before accessing detailed toy information

### User Feedback Section
- Dedicated space for users to share their feedback, reviews, and ratings
- Users can provide comments and rate their shopping experience
- Testimonials from satisfied customers may be featured to build trust and credibility


## All-Toys Route

- All-Toys section:
  - Displays all the toys added by users on the site
  - Toy details are presented in a tabular format
  - Includes information such as toy name, price, and availability
  - Logged-in users can view toy details directly
  - Non-logged-in users are prompted to log in before accessing toy details
  - "View Details" button allows users to explore additional information about a specific toy

- Search Section:
  - Includes a search box and a search button
  - Allows users to search for specific toys by name or category
  - Utilizes a grid template layout with a width of 3/4 for the toy display section
  - The search bar section takes up a width of 1/4 in larger devices
  - In smaller devices, both sections have equal width to ensure a responsive design


## My Toys Route

- Logged-in users can access their personalized "My Toys" section.
- Users can view all the toys they have added to the website.
- Each toy entry includes information such as the toy name, description, price, and quantity.
- Users have the ability to update specific details of their toys, including the price, quantity, description only this value can update by the user.
- Users can delete toys from their list if they no longer wish to keep them.
- This section provides a convenient way for users to manage and track their own toy collection.
- The updates made by the user reflect the changes in real-time and are immediately visible on the website.


## Add a Toy Route

- Only logged-in users can access the "Add a Toy" route.
- Users can fill in the details of the toy they want to add, including the toy photo URL, toy name, price, and subcategory.
- Upon successful addition of the toy, users receive a confirmation message indicating the successful addition of the toy to the website.
- This feature allows users to contribute to the toy collection available on the website and share their unique toys with others.

## Error
- If user hit any wrong route then a error message show to the user in error route don't contain any navigation bar or footer only have a 404 animation and a link 'go to home'

## Footer
- Footer section at the bottom of the page, containing essential links and information
- Contact details, including address
- Social media links to connect with the website's community
- Only Error page did not use the footer


## Live Website
Website Link: https://vocal-crumble-0a6f4d.netlify.app/