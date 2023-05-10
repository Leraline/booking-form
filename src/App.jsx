import { useCallback, useState } from "react";
import "./App.css";

function App() {
  const currentDay = new Date();

  const [data, setData] = useState({
    tower: "A",
    floor: "3",
    room: "1",
    dateFrom: currentDay.toJSON().slice(0, 16),
    dateTo: currentDay.toJSON().slice(0, 16),
    comment: "",
  });

  const floors = [...Array(25).keys()].map((i) => i + 3);
  const rooms = [...Array(10).keys()].map((i) => i + 1);

  const onFormChange = (e) => {
    setData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(JSON.stringify(data));
    alert("Ваши данные отправлены");
  };


  const resetData = (e) => {
    e.preventDefault();
    setData({
      tower: "A",
      floor: "3",
      room: "1",
      dateFrom: currentDay.toJSON().slice(0, 16),
      dateTo: currentDay.toJSON().slice(0, 16),
      comment: "",
    });
  };

  return (
    <>
      <div className="App">
        <form className="form">
          <span>Башня:</span>
          <select
            name="tower"
            value={data.tower}
            onChange={onFormChange}>
            <option>A</option>
            <option>Б</option>
          </select>
          <span>Этаж:</span>
          <select
            name="floor"
            value={data.floor}
            onChange={onFormChange}>
            {floors.map((item, index) => (
              <option key={index}>{item}</option>
            ))}
          </select>
          <span>Номер переговорки:</span>
          <select
            name="room"
            value={data.room}
            onChange={onFormChange}>
            {rooms.map((item, index) => (
              <option key={index}>{item}</option>
            ))}
          </select>
          <div className="date-container">
          <span>Начало брони:</span>
          <input
            className="date"
            type="datetime-local"
            name="dateFrom"
            value={data.dateFrom}
            onChange={onFormChange}></input>
          <span>Конец брони:</span>
          <input
            className="date"
            type="datetime-local"
            name="dateTo"
            min={data.dateFrom}
            value={data.dateTo}
            onChange={onFormChange}></input>
          </div>
          <textarea
            placeholder="место для вашего комментария"
            value={data.comment}
            name="comment"
            onChange={onFormChange}></textarea>
          <div className="form-buttons">
            <button
              className="form-buttons_button"
              onClick={onSubmit}>
              Отправить
            </button>
            <button
              className="form-buttons_button"
              onClick={resetData}>
              Очистить
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default App;
