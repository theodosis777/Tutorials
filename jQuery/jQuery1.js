$('h1').click(function(){
  console.log('THere was a click')
  $(this).text('I WAS CHANGED')

})


$('li').click(function(){
  console.log('Any li was clicked '+$(this).text()  )
})


$('input').eq(0).keypress(function(){
  $('h3').toggleClass('turnBlue')
})
