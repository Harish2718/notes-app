<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <title>Edit Note</title>
    <link rel="stylesheet" type="text/css" href="css/styles.css">
</head>
<body>
    <div class="edit-note-modal">
        <h2>Edit Note</h2>
        <form id="edit-note-form" method="post" action="EditNoteServlet">
            <input type="hidden" name="noteId" value="${note.id}">
            <input type="text" name="title" value="${note.title}" required>
            <textarea name="content" required>${note.content}</textarea>
            <button type="submit">Save Changes</button>
        </form>
    </div>
</body>
</html>
