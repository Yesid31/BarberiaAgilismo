import { Agenda } from "../Agenda/Agenda";
export function Home() {
  return (
    <>
      <section>
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-8">
              <img
                src="https://firebasestorage.googleapis.com/v0/b/barberiaygt.appspot.com/o/barberia.jpg?alt=media&token=66bb833e-6af4-428f-8b00-114916fac4f7"
                alt="foto"
                className="img-fluid w-100"
              />
            </div>
            <div className="col-12 col-md-4">
                <Agenda></Agenda>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
