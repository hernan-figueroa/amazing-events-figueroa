const queryString = location.search;

const params = new URLSearchParams(queryString);

const id = params.get('id');

const eventDetail = allEvents.find(event => event._id == id);


const detailCard = document.getElementById('detailCard');

card = `<div class="d-flex h-100 flex-md-row flex-column">
            <div class="col d-flex justify-content-center">
                <img id="detail-img" src="${eventDetail.image}" class="img-fluid w-100 rounded-start" alt="...">
            </div>
            <div class="d-flex col align-items-center">
                <div class="card-body">
                    <h5 class="card-title">${eventDetail.name}</h5>
                    <p class="card-text">${eventDetail.description}</p>
                    <div class="d-flex flex-wrap flex-column flex-sm-row border-top border-1 border-secondary">
                        <div class="d-flex text-center align-items-center justify-content-center card-text col-sm-6 col-12">
                            <i class="bi bi-person-square text-danger fs-1 pe-2"></i>
                            <span class="col-7">Capacity: ${eventDetail.capacity}</span>
                        </div>
                        <div class="d-flex text-center align-items-center justify-content-center card-text col-sm-6 col-12">
                            <i class="bi bi-currency-dollar text-danger fs-1 pe-2"></i>
                            <span class="col-7">Price: ${eventDetail.price}</span>
                        </div>
                        <div class="d-flex text-center align-items-center justify-content-center card-text col-sm-6 col-12">
                            <i class="bi bi-bookmark-fill text-danger fs-1 pe-2"></i>
                            <span class="col-7">Category: ${eventDetail.category}</span>
                        </div>
                        <div class="d-flex text-center align-items-center justify-content-center card-text col-sm-6 col-12">
                            <i class="bi bi-geo-alt-fill text-danger fs-1 pe-2"></i>
                            <span class="col-7">Place: ${eventDetail.place}</span>
                        </div>
                        <div class="d-flex text-center align-items-center justify-content-center card-text col-sm-6 col-12">
                            <i class="bi bi-calendar-event text-danger fs-1 pe-2"></i>
                            <span class="col-7">Date: ${eventDetail.date}</span>
                        </div>
                        <div class="d-flex text-center align-items-center justify-content-center card-text col-sm-6 col-12">
                            <i class="bi bi-person-fill-up text-danger fs-1 pe-2"></i>
                            <span class="col-7"> ${(eventDetail.assistance!=undefined) ? ("Assistance: "): ("Estimate: ")}  ${(eventDetail.assistance!=undefined) ? (eventDetail.assistance): (eventDetail.estimate)}</span>
                        </div>

                    </div>
                </div>
            </div>
        </div>`

detailCard.innerHTML=card;