<div id="top">

<!-- HEADER STYLE: CLASSIC -->
<div align="center">
	
# javascript-amazon-project
	
<em>Built with the tools and technologies:</em>

<img src="https://img.shields.io/badge/JSON-000000.svg?style=flat&logo=JSON&logoColor=white" alt="JSON">
<img src="https://img.shields.io/badge/JavaScript-F7DF1E.svg?style=flat&logo=JavaScript&logoColor=black" alt="JavaScript">
<img src="https://img.shields.io/badge/Jasmine-8A4182.svg?style=flat&logo=Jasmine&logoColor=white" alt="Jasmine">

</div>  
<br>

---

## Overview

**javascript-amazon-project** is a modular front-end application inspired by Amazon’s e-commerce platform, designed to deliver a responsive shopping experience with dynamic product rendering, smooth cart management, and robust testing. It leverages **structured HTML, vanilla JavaScript, and both static and API-driven data** to create a seamless and interactive user experience.

**Why javascript-amazon-project?**

This project demonstrates the process of building a **feature-rich, test-driven** e-commerce interface from scratch. The core capabilities include:

- 🧩 **🔧 Modular Architecture:** Separate HTML pages and JavaScript modules for maintainability and scalability.
- 🌐 **💻 Dynamic Product Rendering:** Integration of **local JSON** and **remote API calls** via `fetch` and `XMLHttpRequest` for product listing and search.
- 🛒 **🚀 Full Shopping Flow:** Add-to-cart actions, dynamic quantity updates, checkout, order summary, and tracking.
- 💰 **🎯 Utility Functions:** Centralized currency formatting for consistent UI presentation.
- 📡 **🌍 API Integration:** Fetch and XHR-based requests to demonstrate multiple data retrieval methods.
- 🧪 **🛠️ Automated Testing:** **Jasmine testing framework** ensures reliability of key functions, data handling, and UI interactions.
- 📱 **🎨 Responsive Design:** Optimized for a smooth user experience across devices.

---

## Features

|      | Component           | Details                                                                                     |
| :--- | :------------------ | :------------------------------------------------------------------------------------------ |
| ⚙️  | **Architecture**     | <ul><li>Client-side rendering with vanilla JavaScript</li><li>Uses both static JSON (`products.json`) and API calls</li><li>Simple MVC-like separation between data handling and UI rendering</li></ul> |
| 🔩 | **Code Quality**      | <ul><li>Modular JavaScript with reusable functions</li><li>Clear naming conventions</li><li>Minimal code duplication</li></ul> |
| 🧪 | **Testing**           | <ul><li>Automated unit tests with Jasmine for core logic</li><li>Test coverage includes product filtering, cart updates, and utility functions</li></ul> |
| 🔌 | **Integrations**      | <ul><li>API consumption using both <code>fetch</code> and <code>XMLHttpRequest</code></li><li>Local JSON for product catalog</li></ul> |
| 📡 | **Data Handling**     | <ul><li>Real-time cart updates without page reloads</li><li>Client-side search and filtering</li></ul> |
| 📱 | **Responsive Design** | <ul><li>Mobile-first approach</li><li>Works seamlessly on desktop, tablet, and mobile</li></ul> |
| ⚡️  | **Performance**       | <ul><li>Lightweight static assets</li><li>Efficient DOM updates and event delegation</li></ul> |
| 🛡️ | **Security**          | <ul><li>Safe handling of API data</li><li>No sensitive user data stored client-side</li></ul> |

---
### Project Index

<details open>
	<summary><b><code>JAVASCRIPT-AMAZON-PROJECT/</code></b></summary>
	<!-- __root__ Submodule -->
	<details>
		<summary><b>__root__</b></summary>
		<blockquote>
			<div class='directory-path' style='padding: 8px 0; color: #666;'>
				<code><b>⦿ __root__</b></code>
			<table style='width: 100%; border-collapse: collapse;'>
			<thead>
				<tr style='background-color: #f8f9fa;'>
					<th style='width: 30%; text-align: left; padding: 8px;'>File Name</th>
					<th style='text-align: left; padding: 8px;'>Summary</th>
				</tr>
			</thead>
				<tr style='border-bottom: 1px solid #eee;'>
					<td style='padding: 8px;'><b><a href='https://github.com/re-ygh/javascript-amazon-project/blob/master/amazon.html'>amazon.html</a></b></td>
					<td style='padding: 8px;'>- Defines the main structure and layout of an Amazon-themed webpage, integrating responsive design, branding elements, search functionality, and navigation links<br>- Serves as the user interface foundation, dynamically populating product listings within a grid layout through linked scripts<br>- Facilitates seamless user interaction and navigation, forming the core visual and functional entry point of the overall web application.</td>
				</tr>
				<tr style='border-bottom: 1px solid #eee;'>
					<td style='padding: 8px;'><b><a href='https://github.com/re-ygh/javascript-amazon-project/blob/master/checkout.html'>checkout.html</a></b></td>
					<td style='padding: 8px;'>- Provides the checkout page interface, enabling users to review their order and payment details before completing a purchase<br>- It integrates visual components and layout structure to facilitate a seamless and responsive user experience, serving as the central point for order confirmation within the overall e-commerce architecture.</td>
				</tr>
				<tr style='border-bottom: 1px solid #eee;'>
					<td style='padding: 8px;'><b><a href='https://github.com/re-ygh/javascript-amazon-project/blob/master/tracking.html'>tracking.html</a></b></td>
					<td style='padding: 8px;'>- Provides an order tracking webpage that displays delivery details, product information, and shipment progress within an e-commerce platform<br>- Integrates header navigation and styling to ensure consistency across the site, while enabling dynamic retrieval of order and product identifiers via URL parameters for personalized tracking experiences.</td>
				</tr>
				<tr style='border-bottom: 1px solid #eee;'>
					<td style='padding: 8px;'><b><a href='https://github.com/re-ygh/javascript-amazon-project/blob/master/orders.html'>orders.html</a></b></td>
					<td style='padding: 8px;'>- Displays a user’s order history with detailed summaries of each purchase, including order dates, totals, product details, and tracking options<br>- Serves as the main interface for users to review past transactions, facilitating easy reordering and shipment tracking within the overall e-commerce platform architecture.</td>
				</tr>
			</table>
		</blockquote>
	</details>
	<!-- scripts Submodule -->
	<details>
		<summary><b>scripts</b></summary>
		<blockquote>
			<div class='directory-path' style='padding: 8px 0; color: #666;'>
				<code><b>⦿ scripts</b></code>
			<table style='width: 100%; border-collapse: collapse;'>
			<thead>
				<tr style='background-color: #f8f9fa;'>
					<th style='width: 30%; text-align: left; padding: 8px;'>File Name</th>
					<th style='text-align: left; padding: 8px;'>Summary</th>
				</tr>
			</thead>
				<tr style='border-bottom: 1px solid #eee;'>
					<td style='padding: 8px;'><b><a href='https://github.com/re-ygh/javascript-amazon-project/blob/master/scripts/checkout.js'>checkout.js</a></b></td>
					<td style='padding: 8px;'>- Orchestrates the checkout page by loading product and cart data, then rendering the header, order summary, and payment summary to facilitate a seamless user checkout experience<br>- Ensures data dependencies are resolved before displaying key checkout components, integrating data fetching with UI rendering within the overall application architecture.</td>
				</tr>
				<tr style='border-bottom: 1px solid #eee;'>
					<td style='padding: 8px;'><b><a href='https://github.com/re-ygh/javascript-amazon-project/blob/master/scripts/amazon.js'>amazon.js</a></b></td>
					<td style='padding: 8px;'>- Facilitates product display and user interaction within the shopping interface by rendering product listings, managing cart updates, and handling add-to-cart actions<br>- Integrates product data with UI components to enable seamless browsing and purchasing, supporting the overall e-commerce architectures goal of providing an intuitive shopping experience.</td>
				</tr>
			</table>
			<!-- checkout Submodule -->
			<details>
				<summary><b>checkout</b></summary>
				<blockquote>
					<div class='directory-path' style='padding: 8px 0; color: #666;'>
						<code><b>⦿ scripts.checkout</b></code>
					<table style='width: 100%; border-collapse: collapse;'>
					<thead>
						<tr style='background-color: #f8f9fa;'>
							<th style='width: 30%; text-align: left; padding: 8px;'>File Name</th>
							<th style='text-align: left; padding: 8px;'>Summary</th>
						</tr>
					</thead>
						<tr style='border-bottom: 1px solid #eee;'>
							<td style='padding: 8px;'><b><a href='https://github.com/re-ygh/javascript-amazon-project/blob/master/scripts/checkout/orderSummary.js'>orderSummary.js</a></b></td>
							<td style='padding: 8px;'>- Render the comprehensive order summary interface, displaying cart items with product details, delivery options, and delivery dates<br>- Facilitates user interactions for updating quantities, selecting delivery methods, and removing items, while dynamically updating the checkout and payment summaries to ensure an accurate and seamless shopping experience within the overall e-commerce architecture.</td>
						</tr>
						<tr style='border-bottom: 1px solid #eee;'>
							<td style='padding: 8px;'><b><a href='https://github.com/re-ygh/javascript-amazon-project/blob/master/scripts/checkout/checkoutHeader.js'>checkoutHeader.js</a></b></td>
							<td style='padding: 8px;'>- Defines the structure and content of the checkout page header, ensuring consistent branding and navigation<br>- Integrates dynamic cart quantity display to inform users of their current item count, enhancing the checkout experience within the overall e-commerce architecture<br>- This component plays a key role in maintaining a cohesive and user-friendly interface during the checkout process.</td>
						</tr>
						<tr style='border-bottom: 1px solid #eee;'>
							<td style='padding: 8px;'><b><a href='https://github.com/re-ygh/javascript-amazon-project/blob/master/scripts/checkout/paymentSummary.js'>paymentSummary.js</a></b></td>
							<td style='padding: 8px;'>- Generates the order summary interface, displaying itemized costs, shipping, taxes, and total amount based on cart data<br>- Facilitates order review and submission, integrating with backend services to finalize purchases<br>- Serves as a critical component in the checkout flow, ensuring users can review and confirm their orders before completion.</td>
						</tr>
					</table>
				</blockquote>
			</details>
			<!-- utils Submodule -->
			<details>
				<summary><b>utils</b></summary>
				<blockquote>
					<div class='directory-path' style='padding: 8px 0; color: #666;'>
						<code><b>⦿ scripts.utils</b></code>
					<table style='width: 100%; border-collapse: collapse;'>
					<thead>
						<tr style='background-color: #f8f9fa;'>
							<th style='width: 30%; text-align: left; padding: 8px;'>File Name</th>
							<th style='text-align: left; padding: 8px;'>Summary</th>
						</tr>
					</thead>
						<tr style='border-bottom: 1px solid #eee;'>
							<td style='padding: 8px;'><b><a href='https://github.com/re-ygh/javascript-amazon-project/blob/master/scripts/utils/money.js'>money.js</a></b></td>
							<td style='padding: 8px;'>- Provides a utility function to convert monetary values from cents to a formatted dollar string, ensuring consistent currency representation across the application<br>- It supports the broader architecture by standardizing financial data display, facilitating accurate and user-friendly presentation of monetary amounts throughout the project.</td>
						</tr>
					</table>
				</blockquote>
			</details>
		</blockquote>
	</details>
	<!-- backend Submodule -->
	<details>
		<summary><b>backend</b></summary>
		<blockquote>
			<div class='directory-path' style='padding: 8px 0; color: #666;'>
				<code><b>⦿ backend</b></code>
			<table style='width: 100%; border-collapse: collapse;'>
			<thead>
				<tr style='background-color: #f8f9fa;'>
					<th style='width: 30%; text-align: left; padding: 8px;'>File Name</th>
					<th style='text-align: left; padding: 8px;'>Summary</th>
				</tr>
			</thead>
				<tr style='border-bottom: 1px solid #eee;'>
					<td style='padding: 8px;'><b><a href='https://github.com/re-ygh/javascript-amazon-project/blob/master/backend/products.json'>products.json</a></b></td>
					<td style='padding: 8px;'>- Backend/products.json<code>This file serves as a static data source containing detailed information about the products available within the application<br>- It provides essential attributes such as product IDs, images, names, ratings, prices, and relevant keywords<br>- In the overall architecture, </code>products.json` functions as a centralized repository of product data that supports features like product listing, search, and filtering, enabling the backend to efficiently serve product information to the frontend or other services<br>- Its structured format ensures easy data management and quick retrieval, forming a foundational component of the e-commerce or product catalog system.</td>
				</tr>
			</table>
		</blockquote>
	</details>
</details>

---

<div align="left"><a href="#top">⬆ Return</a></div>

---
