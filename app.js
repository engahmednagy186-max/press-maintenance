// هيكل البيانات بالكامل
const dataTree = {
  // المستوى الأول: 1- كلاركات كهرباء
  forklifts: {
    title: "كلاركات كهرباء",
    icon: "bi-truck",
    items: {
      omg: {
        title: "كلارك OMG",
        icon: "bi-gear-wide-connected",
        documents: [
          { name: "اعطال بالعربى", url: "https://drive.google.com/file/d/1l1eYnE-R46dSu-VBcT9RVpu-wvQ3TXfB/view?usp=drive_link" },
          { name: "قطع غيار", url: "https://drive.google.com/file/d/1KSCYVQpswROo185bV9PEbSETJiIt16Pg/view?usp=sharing" },
          { name: "اعطال كاملة", url: "https://drive.google.com/file/d/1l1eYnE-R46dSu-VBcT9RVpu-wvQ3TXfB/view?usp=sharing" }
        ]
      },
      jh: {
        title: "كلارك JH",
        icon: "bi-gear-wide-connected",
        documents: [
          { name: "اعطال بالعربى", url: "https://drive.google.com/drive/folders/YOUR_JH_FAULTS_LINK" },
          { name: "قطع غيار", url: "https://drive.google.com/file/d/1Bc1NP-mD54n5Bd7QQXCGmTDi3W_tWtne/view?usp=sharing" },
          { name: "مانوال", url: "https://drive.google.com/file/d/1UKdmT4KzekL_J6R8TF21CyPWzRM6X1SA/view?usp=sharing" },
          { name: "اعطال كاملة", url: "https://drive.google.com/file/d/1wdj-masIzI1K4W2uNqnx_3YwB4pqvheY/view?usp=sharing" }
        ]
      },
      still: {
        title: "كلارك STILL",
        icon: "bi-gear-wide-connected",
        documents: [
          { name: "اعطال بالعربى", url: "https://drive.google.com/drive/folders/YOUR_STILL_FAULTS_LINK" },
          { name: "قطع غيار", url: "https://drive.google.com/file/d/10GiE9f_YectRu5S5DFmmQg6Xnwep8C4i/view?usp=sharing" },
          { name: "مانوال", url: "https://drive.google.com/file/d/1WPHlKsE1MCxI9w8F3M-1NqrkH1mLlb2D/view?usp=sharing" },
          { name: "اعطال كاملة", url: "https://drive.google.com/drive/folders/YOUR_STILL_PARTS_2_LINK" }
        ]
      }
    }
  },

  // المستوى الأول: 2- انفرترات
  inverters: {
    title: "انفرترات",
    icon: "bi-lightning-charge-fill",
    items: {
      v20: {
        title: "سيمنز V20",
        icon: "bi-hdd-network",
        documents: [
          { name: "اعطال بالعربى", url: "https://drive.google.com/drive/folders/YOUR_V20_FAULTS_LINK" },
          { name: "مانوال", url: "https://drive.google.com/drive/folders/YOUR_V20_MANUAL_LINK" },
          { name: "برمجة سريعة", url: "https://drive.google.com/drive/folders/YOUR_V20_QUICKPROG_LINK" }
        ]
      },
      micromaster: {
        title: "سيمنز ميكروماستر",
        icon: "bi-hdd-network",
        documents: [
          { name: "اعطال بالعربى", url: "https://drive.google.com/drive/folders/YOUR_MICRO_FAULTS_LINK" },
          { name: "مانوال", url: "https://drive.google.com/drive/folders/YOUR_MICRO_MANUAL_LINK" },
          { name: "برمجة سريعة", url: "https://drive.google.com/drive/folders/YOUR_MICRO_QUICKPROG_LINK" }
        ]
      },
      ls_m100: {
        title: "LS M100",
        icon: "bi-hdd-network",
        documents: [
          { name: "اعطال بالعربى", url: "https://drive.google.com/drive/folders/YOUR_LSM100_FAULTS_LINK" },
          { name: "مانوال", url: "https://drive.google.com/drive/folders/YOUR_LSM100_MANUAL_LINK" },
          { name: "برمجة سريعة", url: "https://drive.google.com/drive/folders/YOUR_LSM100_QUICKPROG_LINK" }
        ]
      },
      ls_ig5a: {
        title: "LS IG5A",
        icon: "bi-hdd-network",
        documents: [
          { name: "اعطال بالعربى", url: "https://drive.google.com/drive/folders/YOUR_IG5A_FAULTS_LINK" },
          { name: "مانوال", url: "https://drive.google.com/drive/folders/YOUR_IG5A_MANUAL_LINK" },
          { name: "برمجة سريعة", url: "https://drive.google.com/drive/folders/YOUR_IG5A_QUICKPROG_LINK" }
        ]
      },
      lenze: {
        title: "لينز قديم",
        icon: "bi-hdd-network",
        documents: [
          { name: "اعطال بالعربى", url: "https://drive.google.com/drive/folders/YOUR_LENZE_FAULTS_LINK" },
          { name: "مانوال", url: "https://drive.google.com/drive/folders/YOUR_LENZE_MANUAL_LINK" },
          { name: "برمجة سريعة", url: "https://drive.google.com/drive/folders/YOUR_LENZE_QUICKPROG_LINK" }
        ]
      }
    }
  },

  // المستوى الأول: 3- روبوت
  robot: {
    title: "روبوت",
    icon: "bi-robot",
    items: {
      r1600: {
        title: "1600",
        icon: "bi-motherboard",
        documents: [
          { name: "كيفية عمل P-START", url: "https://drive.google.com/drive/folders/YOUR_1600_PSTART_LINK" },
          { name: "كيفية عمل I-START", url: "https://drive.google.com/drive/folders/YOUR_1600_ISTART_LINK" },
          { name: "كيفية عمل معايرة للاكسات", url: "https://drive.google.com/drive/folders/YOUR_1600_CALIB_LINK" },
          { name: "كيفية تحميل IRB_1", url: "https://drive.google.com/drive/folders/YOUR_1600_IRB1_LINK" },
          { name: "كيفية تحميل SYS_PAR بعد I-START", url: "https://drive.google.com/drive/folders/YOUR_1600_SYSPAR_LINK" },
          { name: "كيفية عمل CLEAR MEMORY", url: "https://drive.google.com/drive/folders/YOUR_1600_CLEARMEM_LINK" }
        ]
      },
      r2400: {
        title: "2400",
        icon: "bi-motherboard",
        documents: [
          { name: "كيفية عمل P-START", url: "https://drive.google.com/drive/folders/YOUR_2400_PSTART_LINK" },
          { name: "كيفية عمل I-START", url: "https://drive.google.com/drive/folders/YOUR_2400_ISTART_LINK" },
          { name: "كيفية عمل معايرة للاكسات", url: "https://drive.google.com/drive/folders/YOUR_2400_CALIB_LINK" },
          { name: "كيفية تحميل IRB_1", url: "https://drive.google.com/drive/folders/YOUR_2400_IRB1_LINK" },
          { name: "كيفية تحميل SYS_PAR بعد I-START", url: "https://drive.google.com/drive/folders/YOUR_2400_SYSPAR_LINK" },
          { name: "كيفية عمل CLEAR MEMORY", url: "https://drive.google.com/drive/folders/YOUR_2400_CLEARMEM_LINK" }
        ]
      }
    }
  }
};

// حالة التطبيق
let currentCategory = null;
let currentMachine = null;

const container = document.getElementById("cardsContainer");
const breadcrumbs = document.getElementById("breadcrumbsNav");
const backBtn = document.getElementById("backBtn");

// إعداد مسار التنقل (Breadcrumbs)
function updateBreadcrumbs() {
  let html = `<li class="breadcrumb-item"><a href="#" onclick="showRoot(); return false;">الرئيسية</a></li>`;
  
  if (currentCategory) {
    const catTitle = dataTree[currentCategory].title;
    if (currentMachine) {
      html += `<li class="breadcrumb-item"><a href="#" onclick="showCategory('${currentCategory}'); return false;">${catTitle}</a></li>`;
      html += `<li class="breadcrumb-item active" aria-current="page">${dataTree[currentCategory].items[currentMachine].title}</li>`;
    } else {
      html += `<li class="breadcrumb-item active" aria-current="page">${catTitle}</li>`;
    }
    backBtn.classList.remove("d-none");
  } else {
    backBtn.classList.add("d-none");
  }
  
  breadcrumbs.innerHTML = html;
}

// عرض المستوى الأول: الأقسام الرئيسية الثلاثة فقط
function showRoot() {
  currentCategory = null;
  currentMachine = null;
  updateBreadcrumbs();

  container.innerHTML = Object.keys(dataTree).map(key => {
    const item = dataTree[key];
    return `
      <div class="col-12 col-md-4">
        <div class="nav-box" onclick="showCategory('${key}')">
          <i class="bi ${item.icon} icon-wrap"></i>
          <h2 class="box-title">${item.title}</h2>
        </div>
      </div>
    `;
  }).join('');
}

// عرض المستوى الثاني: الماكينات التابعة للقسم فقط
function showCategory(categoryKey) {
  currentCategory = categoryKey;
  currentMachine = null;
  updateBreadcrumbs();

  const category = dataTree[categoryKey];
  const items = category.items;

  container.innerHTML = Object.keys(items).map(key => {
    const item = items[key];
    return `
      <div class="col-12 col-md-6 col-lg-4">
        <div class="nav-box" onclick="showDocuments('${key}')">
          <i class="bi ${item.icon} icon-wrap"></i>
          <h3 class="box-title">${item.title}</h3>
        </div>
      </div>
    `;
  }).join('');
}

// عرض المستوى الثالث: ملفات Google Drive التابعة للماكينة
function showDocuments(machineKey) {
  currentMachine = machineKey;
  updateBreadcrumbs();

  const docs = dataTree[currentCategory].items[machineKey].documents;

  container.innerHTML = docs.map(doc => {
    return `
      <div class="col-12 col-md-6 col-lg-4">
        <a href="${doc.url}" target="_blank" rel="noopener noreferrer" class="text-decoration-none">
          <div class="nav-box drive-box">
            <i class="bi bi-google icon-wrap"></i>
            <h4 class="box-title">${doc.name}</h4>
            <div class="drive-indicator">
              <span>فتح في Google Drive</span>
              <i class="bi bi-box-arrow-up-right"></i>
            </div>
          </div>
        </a>
      </div>
    `;
  }).join('');
}

// زر الرجوع خطوة للخلف
backBtn.addEventListener("click", () => {
  if (currentMachine) {
    showCategory(currentCategory);
  } else if (currentCategory) {
    showRoot();
  }
});

// بدء التشغيل
showRoot();
