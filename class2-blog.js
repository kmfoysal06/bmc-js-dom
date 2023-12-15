const blogList = document.getElementsByTagName("li");
const blogs = document.getElementsByTagName("article");
const blogHeading = document.getElementsByTagName("h2");
const header = document.getElementById("header");
const heading = document.getElementById("heading");
const container = document.getElementById("container");

// using for of loop to set all blog title from blog title list on heading.
for(let i = 0;i<blogList.length;i++){
	blogHeading[i].innerText = blogList[i].innerText;
}


//styles on body
document.body.style.width = "95vw";


//styles on header
header.style.width = "100%";
header.style.textAlign = "center";
header.style.margin = '20px';

//styles on heading
heading.style.textAlign = 'center'

// styles on container
container.style.display = 'grid'
container.style.gridTemplateColumns = '1fr 1fr 1fr'
container.style.margin = '10px'

// styles on li elements
for(const li of blogList){
	li.style.display = 'inline';
	li.style.margin = '10px'
	li.style.padding = '10px'
	li.style.border = '1px solid #000'
	li.style.cursor = 'pointer'
}

// styles on all article
for(const blog of blogs){
	blog.style.margin = '10px'
	blog.style.padding = '10px'
	blog.style.cursor = 'pointer'
	blog.style.background = '#0f0'
	blog.style.color = '#fff'
	blog.style.border = '3px solid #00f'
}


// adding custom blog with js
const h = document.createElement("h2");
const p = document.createElement("p");
const blog = document.createElement("article");
blog.classList.add("blog");
h.innerText = "Blog 7"
p.innerText = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel quisquam, asperiores provident vitae assumenda alias tempora quaerat eius, eum hic.Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel quisquam, asperiores provident vitae assumenda alias tempora quaerat eius, eum hic."

//adding styles to this one also
blog.style.margin = '10px';
blog.style.padding = '10px';
blog.style.cursor = 'pointer'
blog.style.background = '#0f0'
blog.style.color = '#fff'
blog.style.border = '3px solid #00f'

// appending p and h2 tags to blog
blog.appendChild(h);
blog.appendChild(p);

// appending article tag to container tag
container.appendChild(blog);