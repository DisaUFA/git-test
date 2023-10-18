import React from 'react'


export default function MenuComp2() {
  return (
    

<div class="sidebar border border-right col-md-3 col-lg-2 p-0 bg-body-tertiary">
            <div class="offcanvas-md offcanvas-end bg-body-tertiary" tabindex="-1" id="sidebarMenu" aria-labelledby="sidebarMenuLabel">
              <div class="offcanvas-header">
                <h5 class="offcanvas-title" id="sidebarMenuLabel">Company name</h5>
                <button type="button" class="btn-close" data-bs-dismiss="offcanvas" data-bs-target="#sidebarMenu" aria-label="Close"></button>
              </div>

              <div class="offcanvas-body d-md-flex flex-column p-0 pt-lg-3 overflow-y-auto">
                <ul class="nav flex-column">
                  <li class="nav-item">
                    <a class="nav-link d-flex align-items-center gap-2 active" aria-current="page" href="#">
                      <svg class="bi"><use href="#house-fill" /></svg>
                      Главная
                    </a>
                  </li>
                  <hr class="my-3" />
                  <li class="nav-item">
                    <a class="nav-link d-flex align-items-center gap-2" href="#">
                      <svg class="bi"><use href="#file-earmark" /></svg>
                      Договора дети
                    </a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link d-flex align-items-center gap-2" href="#">
                      <svg class="bi"><use href="#file-earmark" /></svg>
                      Договора учителя
                    </a>
                  </li>
                  <hr class="my-3" />
                  <li class="nav-item">
                    <a class="nav-link d-flex align-items-center gap-2" href="#">
                      <svg class="bi"><use href="#people" /></svg>
                      Дети
                    </a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link d-flex align-items-center gap-2" href="#">
                      <svg class="bi"><use href="#people" /></svg>
                      Учителя
                    </a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link d-flex align-items-center gap-2" href="#">
                      <svg class="bi"><use href="#graph-up" /></svg>
                      Reports
                    </a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link d-flex align-items-center gap-2" href="#">
                      <svg class="bi"><use href="#puzzle" /></svg>
                      Integrations
                    </a>
                  </li>
                </ul>



                <h6 class="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-body-secondary text-uppercase">
                  <span>Saved reports</span>
                  <a class="link-secondary" href="#" aria-label="Add a new report">
                    <svg class="bi"><use href="#plus-circle" /></svg>
                  </a>
                </h6>
                <ul class="nav flex-column mb-auto">
                  <li class="nav-item">
                    <a class="nav-link d-flex align-items-center gap-2" href="#">
                      <svg class="bi"><use href="#file-earmark-text" /></svg>
                      Current month
                    </a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link d-flex align-items-center gap-2" href="#">
                      <svg class="bi"><use href="#file-earmark-text" /></svg>
                      Last quarter
                    </a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link d-flex align-items-center gap-2" href="#">
                      <svg class="bi"><use href="#file-earmark-text" /></svg>
                      Social engagement
                    </a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link d-flex align-items-center gap-2" href="#">
                      <svg class="bi"><use href="#file-earmark-text" /></svg>
                      Year-end sale
                    </a>
                  </li>
                </ul>

                <hr class="my-3" />

                <ul class="nav flex-column mb-auto">
                  <li class="nav-item">
                    <a class="nav-link d-flex align-items-center gap-2" href="#">
                      <svg class="bi"><use href="#gear-wide-connected" /></svg>
                      Settings
                    </a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link d-flex align-items-center gap-2" href="#">
                      <svg class="bi"><use href="#door-closed" /></svg>
                      Sign out
                    </a>
                  </li>
                </ul>
              </div>

            </div>
</div>

    
  )
}
