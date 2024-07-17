<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <title>Notes Application</title>
    <link rel="stylesheet" type="text/css" href="css/styles.css">
</head>
<body>
    <div class="container">
        <h1>My Notes</h1>
        <div id="notes-list">
        </div>

        <!--Form -->
        <div class="add-note">
            <h2>Add a Note</h2>
            <form id="add-note-form" method="post" action="AddNoteServlet">
                <input type="text" name="title" placeholder="Title" required>
                <textarea name="content" placeholder="Note Content" required></textarea>
                <button type="submit">Add Note</button>
            </form>
        </div>
    </div>

    <script src="js/script.js"></script>
</body>
</html>
