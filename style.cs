body {
    font-family: 'Noto Sans SC', sans-serif;
    margin: 0;
    padding: 0;
    background-color: #f4f7f6;
    color: #333;
    line-height: 1.6;
}

.container {
    max-width: 800px;
    margin: 40px auto;
    padding: 20px;
    background: #fff;
    border-radius: 10px;
    box-shadow: 0 4px 15px rgba(0,0,0,0.1);
}

header {
    text-align: center;
    margin-bottom: 40px;
}

.avatar {
    width: 120px;
    height: 120px;
    border-radius: 50%;
    border: 4px solid #fff;
    box-shadow: 0 2px 8px rgba(0,0,0,0.15);
}

h1 {
    font-weight: 700;
    margin-top: 20px;
    margin-bottom: 5px;
}

.subtitle {
    font-weight: 300;
    color: #777;
    margin: 0;
}

h2 {
    font-weight: 700;
    border-bottom: 2px solid #e0e0e0;
    padding-bottom: 10px;
    margin-bottom: 20px;
}

.projects {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 20px;
}

.project-card {
    background: #f9f9f9;
    border: 1px solid #eee;
    padding: 20px;
    border-radius: 8px;
    text-decoration: none;
    color: #333;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.project-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 20px rgba(0,0,0,0.1);
}

.project-card h3 {
    margin-top: 0;
    margin-bottom: 10px;
    color: #0056b3;
}

footer {
    text-align: center;
    margin-top: 40px;
    padding-top: 20px;
    border-top: 1px solid #e0e0e0;
    font-size: 0.9em;
    color: #888;
}