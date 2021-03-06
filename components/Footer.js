const Footer = () => {
  return (
    <footer className=" mx-auto mt-34 max-w-[1200px] font-tinos text-primary ">
      <div className="grid grid-cols-4 gap-x-20 border-y border-primary py-12">
        <div>
          <h2 className="font-leiko">Contact Us</h2>
          <address className="mt-6 text-sm not-italic">
            Floor 5,
            <br /> 12-14 Grey Street,
            <br /> Newcastle upon Tyne,
            <br /> NE1 6TE
            <div className="mt-4 flex flex-col">
              <a href="tel:01112128111">Tel: 0111 212 8111</a>
              <a href="mailto:admin@horizonthemes.co.uk">admin@horizonthemes.co.uk</a>
            </div>
          </address>
        </div>
        <nav>
          <h2 className="font-leiko">Services</h2>
          <ul className="mt-6 space-y-2 text-sm">
            <li className="group relative flex self-start">
              <a
                className="group relative flex items-center self-start text-center text-primary"
                href="#"
              >
                <span>Service One</span>
                <span className="absolute bottom-0 left-0 h-px w-0 bg-primary transition-width duration-200 group-hover:w-full"></span>
              </a>
            </li>
            <li className="group relative flex self-start">
              <a
                className="group relative flex items-center self-start text-center text-primary"
                href="#"
              >
                <span>Specialist Service Two</span>
                <span className="absolute bottom-0 left-0 h-px w-0 bg-primary transition-width duration-200 group-hover:w-full"></span>
              </a>
            </li>
            <li className="group relative flex self-start">
              <a
                className="group relative flex items-center self-start text-center text-primary"
                href="#"
              >
                <span>Specialist Service Three</span>
                <span className="absolute bottom-0 left-0 h-px w-0 bg-primary transition-width duration-200 group-hover:w-full"></span>
              </a>
            </li>
            <li className="group relative flex self-start">
              <a
                className="group relative flex items-center self-start text-center text-primary"
                href="#"
              >
                <span>Specialist Service Four</span>
                <span className="absolute bottom-0 left-0 h-px w-0 bg-primary transition-width duration-200 group-hover:w-full"></span>
              </a>
            </li>
            <li className="group relative flex self-start">
              <a
                className="group relative flex items-center self-start text-center text-primary"
                href="#"
              >
                <span>Service Five</span>
                <span className="absolute bottom-0 left-0 h-px w-0 bg-primary transition-width duration-200 group-hover:w-full"></span>
              </a>
            </li>
          </ul>
        </nav>
        <nav>
          <h2 className="font-leiko">Resources</h2>
          <ul className="mt-6 space-y-2 text-sm">
            <li className="group relative flex self-start">
              <a
                className="group relative flex items-center self-start text-center text-primary"
                href="#"
              >
                <span>Resource One</span>
                <span className="absolute bottom-0 left-0 h-px w-0 bg-primary transition-width duration-200 group-hover:w-full"></span>
              </a>
            </li>
            <li className="group relative flex self-start">
              <a
                className="group relative flex items-center self-start text-center text-primary"
                href="#"
              >
                <span>Resource Two</span>
                <span className="absolute bottom-0 left-0 h-px w-0 bg-primary transition-width duration-200 group-hover:w-full"></span>
              </a>
            </li>
            <li className="group relative flex self-start">
              <a
                className="group relative flex items-center self-start text-center text-primary"
                href="#"
              >
                <span>Resource Three</span>
                <span className="absolute bottom-0 left-0 h-px w-0 bg-primary transition-width duration-200 group-hover:w-full"></span>
              </a>
            </li>
          </ul>
        </nav>
        <div className="flex gap-8 justify-self-end">
          <a href="#" className="group h-max">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="transition-colors group-hover:text-primary-hovered"
            >
              <path
                d="M12 0C8.74 0 8.333 0.015 7.053 0.072C5.775 0.132 4.905 0.333 4.14 0.63C3.351 0.936 2.681 1.347 2.014 2.014C1.347 2.681 0.935 3.35 0.63 4.14C0.333 4.905 0.131 5.775 0.072 7.053C0.012 8.333 0 8.74 0 12C0 15.26 0.015 15.667 0.072 16.947C0.132 18.224 0.333 19.095 0.63 19.86C0.936 20.648 1.347 21.319 2.014 21.986C2.681 22.652 3.35 23.065 4.14 23.37C4.906 23.666 5.776 23.869 7.053 23.928C8.333 23.988 8.74 24 12 24C15.26 24 15.667 23.985 16.947 23.928C18.224 23.868 19.095 23.666 19.86 23.37C20.648 23.064 21.319 22.652 21.986 21.986C22.652 21.319 23.065 20.651 23.37 19.86C23.666 19.095 23.869 18.224 23.928 16.947C23.988 15.667 24 15.26 24 12C24 8.74 23.985 8.333 23.928 7.053C23.868 5.776 23.666 4.904 23.37 4.14C23.064 3.351 22.652 2.681 21.986 2.014C21.319 1.347 20.651 0.935 19.86 0.63C19.095 0.333 18.224 0.131 16.947 0.072C15.667 0.012 15.26 0 12 0ZM12 2.16C15.203 2.16 15.585 2.176 16.85 2.231C18.02 2.286 18.655 2.48 19.077 2.646C19.639 2.863 20.037 3.123 20.459 3.542C20.878 3.962 21.138 4.361 21.355 4.923C21.519 5.345 21.715 5.98 21.768 7.15C21.825 8.416 21.838 8.796 21.838 12C21.838 15.204 21.823 15.585 21.764 16.85C21.703 18.02 21.508 18.655 21.343 19.077C21.119 19.639 20.864 20.037 20.444 20.459C20.025 20.878 19.62 21.138 19.064 21.355C18.644 21.519 17.999 21.715 16.829 21.768C15.555 21.825 15.18 21.838 11.97 21.838C8.759 21.838 8.384 21.823 7.111 21.764C5.94 21.703 5.295 21.508 4.875 21.343C4.306 21.119 3.915 20.864 3.496 20.444C3.075 20.025 2.806 19.62 2.596 19.064C2.431 18.644 2.237 17.999 2.176 16.829C2.131 15.569 2.115 15.18 2.115 11.985C2.115 8.789 2.131 8.399 2.176 7.124C2.237 5.954 2.431 5.31 2.596 4.89C2.806 4.32 3.075 3.93 3.496 3.509C3.915 3.09 4.306 2.82 4.875 2.611C5.295 2.445 5.926 2.25 7.096 2.19C8.371 2.145 8.746 2.13 11.955 2.13L12 2.16ZM12 5.838C8.595 5.838 5.838 8.598 5.838 12C5.838 15.405 8.598 18.162 12 18.162C15.405 18.162 18.162 15.402 18.162 12C18.162 8.595 15.402 5.838 12 5.838ZM12 16C9.79 16 8 14.21 8 12C8 9.79 9.79 8 12 8C14.21 8 16 9.79 16 12C16 14.21 14.21 16 12 16ZM19.846 5.595C19.846 6.39 19.2 7.035 18.406 7.035C17.611 7.035 16.966 6.389 16.966 5.595C16.966 4.801 17.612 4.156 18.406 4.156C19.199 4.155 19.846 4.801 19.846 5.595Z"
                fill="currentColor"
              />
            </svg>
          </a>
          <a href="#" className="group h-max">
            <svg
              width="24"
              height="20"
              viewBox="0 0 24 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="transition-colors group-hover:text-primary-hovered"
            >
              <path
                d="M23.954 2.323C23.069 2.712 22.124 2.977 21.129 3.098C22.143 2.487 22.923 1.524 23.292 0.375C22.341 0.93 21.287 1.334 20.165 1.559C19.269 0.6 17.992 0 16.574 0C13.857 0 11.654 2.203 11.654 4.917C11.654 5.307 11.699 5.682 11.781 6.041C7.691 5.848 4.066 3.884 1.64 0.915C1.213 1.637 0.974 2.476 0.974 3.39C0.974 5.1 1.844 6.603 3.162 7.486C2.355 7.46 1.596 7.238 0.934 6.87V6.931C0.934 9.316 2.627 11.305 4.88 11.758C4.467 11.869 4.031 11.929 3.584 11.929C3.27 11.929 2.969 11.899 2.668 11.843C3.299 13.796 5.113 15.22 7.272 15.26C5.592 16.579 3.463 17.365 1.17 17.365C0.78 17.365 0.391 17.342 0 17.298C2.189 18.692 4.768 19.507 7.557 19.507C16.611 19.507 21.556 12.011 21.556 5.521C21.556 5.312 21.556 5.101 21.541 4.891C22.502 4.202 23.341 3.331 24.001 2.343L23.954 2.323Z"
                fill="currentColor"
              />
            </svg>
          </a>
          <a href="#" className="group h-max">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="transition-colors group-hover:text-primary-hovered"
            >
              <path
                d="M20.447 20.452H16.893V14.883C16.893 13.555 16.866 11.846 15.041 11.846C13.188 11.846 12.905 13.291 12.905 14.785V20.452H9.351V9H12.765V10.561H12.811C13.288 9.661 14.448 8.711 16.181 8.711C19.782 8.711 20.448 11.081 20.448 14.166V20.452H20.447ZM5.337 7.433C4.193 7.433 3.274 6.507 3.274 5.368C3.274 4.23 4.194 3.305 5.337 3.305C6.477 3.305 7.401 4.23 7.401 5.368C7.401 6.507 6.476 7.433 5.337 7.433ZM7.119 20.452H3.555V9H7.119V20.452ZM22.225 0H1.771C0.792 0 0 0.774 0 1.729V22.271C0 23.227 0.792 24 1.771 24H22.222C23.2 24 24 23.227 24 22.271V1.729C24 0.774 23.2 0 22.222 0H22.225Z"
                fill="currentColor"
              />
            </svg>
          </a>
          <a href="#" className="group h-max">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="transition-colors group-hover:text-primary-hovered"
            >
              <path
                d="M23.9981 11.9991C23.9981 5.37216 18.626 0 11.9991 0C5.37216 0 0 5.37216 0 11.9991C0 17.9882 4.38789 22.9522 10.1242 23.8524V15.4676H7.07758V11.9991H10.1242V9.35553C10.1242 6.34826 11.9156 4.68714 14.6564 4.68714C15.9692 4.68714 17.3424 4.92149 17.3424 4.92149V7.87439H15.8294C14.3388 7.87439 13.8739 8.79933 13.8739 9.74824V11.9991H17.2018L16.6698 15.4676H13.8739V23.8524C19.6103 22.9522 23.9981 17.9882 23.9981 11.9991Z"
                fill="currentColor"
              />
            </svg>
          </a>
        </div>
      </div>
      <div className="flex justify-between py-8 text-sm">
        <div className="flex gap-x-11">
          <span>?? Horizon</span>
          <span>Company No. 199899939</span>
          <span>VAT No. 199899939</span>
        </div>
        <div className="flex gap-10">
          <a href="#" className="group relative">
            Cookies Policy
            <span className="absolute bottom-0 left-0 h-px w-0 bg-primary transition-width duration-200 group-hover:w-full"></span>
          </a>
          <a href="#" className="group relative">
            Privacy Policy
            <span className="absolute bottom-0 left-0 h-px w-0 bg-primary transition-width duration-200 group-hover:w-full"></span>
          </a>
          <a href="#" className="group relative">
            Terms & Conditions
            <span className="absolute bottom-0 left-0 h-px w-0 bg-primary transition-width duration-200 group-hover:w-full"></span>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
