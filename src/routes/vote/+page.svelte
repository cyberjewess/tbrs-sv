<script lang="ts">
	const form = {
		link: 'https://forms.gle/78Dpnps5FQD985an7',
		display: 'Choose Our Name'
	};
</script>

<h1>Vote</h1>
<h4 class="centered">Like your life depends on it.</h4>
<div class="vote-card">
	<ul>
		<li>
			<a href={form.link} class="button">
				<pre>{form.display}</pre>
			</a>
		</li>
	</ul>
</div>
