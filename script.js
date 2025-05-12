document.querySelector('.rsvp-form').addEventListener('submit', function(e) {
  e.preventDefault();
  const form = e.target;
  const name = form.name.value;
  const attendance = form.attendance.value === 'yes' ? 'Буду!' : 'Не смогу';
  const transfer = form.transfer.value === 'yes' ? 'Потребуется трансфер' : 'Трансфер не нужен';
  const track = form.track.value || 'Не указан';
  const drink = {
    white_wine: 'Вино белое полусухое',
    samogon: 'Самогонка',
    vodka: 'Водка'
  }[form.drink.value] || 'Не выбран';

  alert(`Спасибо, ${name}!\n\nВаш ответ: ${attendance}\n${transfer}\nЛюбимый трек: ${track}\nВыбранный напиток: ${drink}`);
  form.reset();
}); 