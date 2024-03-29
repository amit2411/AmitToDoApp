<script type="text/x-template" id="todo-item-template">
    <div class="todo-view">
        <input type="checkbox" class="todo-checkbox" {checked}>
        <span class="todo-content" tabindex="0">{text}</span>
    </div>

    <div class="todo-edit">
        <input type="text" class="todo-input" value="{text}">
    </div>

    <a href="#" class="todo-remove" title="Remove this task">
        <span class="todo-remove-icon"></span>
    </a>
</script>

<!-- This template HTML will be used to render the statistics at the bottom
     of the todo list. -->
<script type="text/x-template" id="todo-stats-template">
    <span class="todo-count">
        <span class="todo-remaining">{numRemaining}</span>
        <span class="todo-remaining-label">{remainingLabel}</span> left.
    </span>

    <a href="#" class="todo-clear">
        Clear <span class="todo-done">{numDone}</span>
        completed <span class="todo-done-label">{doneLabel}</span>
    </a>
</script>