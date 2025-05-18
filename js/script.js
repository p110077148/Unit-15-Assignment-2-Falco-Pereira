    function toggleText(id, icon) {
    const textBlock = document.getElementById(id);
    textBlock.classList.toggle('expanded');
    icon.innerHTML = textBlock.classList.contains('expanded') ? '▲' : '▼';
    }

    